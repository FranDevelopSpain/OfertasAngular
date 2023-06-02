import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cookieToken = localStorage.getItem('login')
    if (cookieToken !== null) {
      // Existe usuario
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(cookieToken).id_token}`, // Añado token
        },
      });
    }

    return next.handle(request).pipe(
      tap((e) => {}),
      finalize(() => {
        console.log(request.url + `(metodo ${request.method}) ha finalizado`);
      })
    ); // Ejecutar la peticoin
  }
}
