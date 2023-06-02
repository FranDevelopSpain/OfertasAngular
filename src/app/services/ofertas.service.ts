import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaModel } from '../models/oferta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';
import { LoginService } from './login.service';
import { LoginModel } from '../models/login.model';
import { environment } from 'src/environments/environment';

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  headers!: HttpHeaders;
  token!: LoginModel | null;
  apiOferta: string = environment.api + 'ofertas';

  constructor(private _http: HttpClient, private _loginService: LoginService) {}

  //Method to get the token, that will validate the operations with the API
  getToken(): void {
    this.token = JSON.parse(<string>localStorage.getItem(LOGIN_KEY))[
      'id_token'
    ];
    console.log(this.token);
    if (this.token != null) {
      this.headers = new HttpHeaders({});
    } else {
      console.log('Error al cargar el token de usuario');
    }
  }
  getOfertas(): Observable<any> {
    return this._http.get(this.apiOferta);
  }
  //Get an record by id
  getOferta(id: number): Observable<any> {
    return this._http.get(this.apiOferta + `/${id}`);
  }

  //New register
  registerOferta(oferta: OfertaModel): Observable<OfertaModel> {
    this.getToken();
    //console.log(oferta);
    return this._http.post<OfertaModel>(this.apiOferta, oferta, {
      headers: this.headers,
    });
  }
  //Delete an existing record
  deleteOferta(id: number): Observable<any> {
    this.getToken();
    return this._http.delete(this.apiOferta + `/${id}`, {
      headers: this.headers,
    });
  }
}
