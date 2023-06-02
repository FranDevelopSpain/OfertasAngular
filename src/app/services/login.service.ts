import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';
import { LoginModel } from '../models/login.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginModelBehaviorSubject: BehaviorSubject<LoginModel | null>;
  public login: Observable<LoginModel | null>;

  constructor(private http: HttpClient, private route: Router) {
    //As long as we have the login token, it will be loaded automatically
    this.loginModelBehaviorSubject = new BehaviorSubject<LoginModel | null>(
      JSON.parse(<string>localStorage.getItem(LOGIN_KEY))
    );
    this.login = this.loginModelBehaviorSubject.asObservable();
  }

  //Do to log in and save the token in local storage
  performLogin(data: LoginModel): Observable<LoginModel> {
    return this.http
      .post<LoginModel>(environment.api + 'authenticate', data)
      .pipe(
        map((retornoAPI) => {
          console.log('Login OK: ' + JSON.stringify(retornoAPI));
          this.loginModelBehaviorSubject.next(retornoAPI);
          localStorage.setItem(LOGIN_KEY, JSON.stringify(retornoAPI));
          return retornoAPI;
        })
      );
  }

  //Do to log out and remove the token
  performLogout(): void {
    localStorage.removeItem(LOGIN_KEY);
    this.loginModelBehaviorSubject.next(null);
    this.route.navigate(['/login']);
  }
}
