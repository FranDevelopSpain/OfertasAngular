import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getOfertas() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) {}

  getExampleData() {
    let ofertas = [
      {
        id: 1,
        titulo: 'Buckinghamshire',
        descripcion: 'forecast',
        empresa: 'Developer Hong Kong Dollar synthesize',
        salario: 58479,
        ciudad: 'Nepal Human array',
        email: 'Madge_Mayert@hotmail.com',
      },
      {
        id: 2,
        titulo: 'intranet Personal Loan Account',
        descripcion: 'Belarus Garden clicks-and-mortar',
        empresa: 'Small Steel Shoes multi-byte Rustic Granite Cheese',
        salario: 11690,
        ciudad: 'parsing',
        email: 'Carson.Weber@yahoo.com',
      },
      {
        id: 3,
        titulo: 'Chair Tugrik',
        descripcion: 'orchid payment',
        empresa: 'Wooden program',
        salario: 65591,
        ciudad: 'Uganda West Virginia',
        email: 'Jewell_Hauck73@yahoo.com',
      },
      {
        id: 4,
        titulo: 'SMS',
        descripcion: 'quantify Nebraska',
        empresa: 'TCP Persevering',
        salario: 28596,
        ciudad: 'Devolved magenta Executive',
        email: 'Hobart63@yahoo.com',
      },
      {
        id: 5,
        titulo: 'Auto Loan Account Principal payment',
        descripcion: 'Street Division',
        empresa: 'incentivize Rubber',
        salario: 22268,
        ciudad: 'quantifying drive',
        email: 'Emie_Effertz@gmail.com',
      },
      {
        id: 6,
        titulo: 'Incredible Concrete Car metrics mint green',
        descripcion: 'Progressive reboot',
        empresa: 'grow',
        salario: 99227,
        ciudad: 'Table Investment Account Associate',
        email: 'Enrique61@gmail.com',
      },
      {
        id: 7,
        titulo: 'Multi-channelled navigate',
        descripcion: 'Soap',
        empresa: 'Right-sized',
        salario: 78292,
        ciudad: 'Movies Lempira',
        email: 'Johnny.Kris@hotmail.com',
      },
      {
        id: 8,
        titulo: 'context-sensitive',
        descripcion: 'firewall Forest Pants',
        empresa: 'HDD',
        salario: 11061,
        ciudad: 'Generic withdrawal',
        email: 'Garrick_Feest@yahoo.com',
      },
      {
        id: 9,
        titulo: 'Central African Republic Executive Avon',
        descripcion: 'connecting',
        empresa: 'invoice synthesizing solutions',
        salario: 52709,
        ciudad: 'Rubber',
        email: 'Ashley_Ziemann@yahoo.com',
      },
      {
        id: 10,
        titulo: 'Cape SSL',
        descripcion: 'Licensed',
        empresa: 'sticky Fantastic Fresh Hat primary',
        salario: 95756,
        ciudad: 'bypassing Architect Music',
        email: 'Cielo_Torphy92@yahoo.com',
      },
    ];
    return ofertas;
  }
}
