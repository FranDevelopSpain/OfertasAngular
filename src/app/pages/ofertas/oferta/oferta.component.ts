import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaModel } from 'src/app/models/oferta.model';
import { HomeService } from 'src/app/services/home.service';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
})
export class OfertaComponent implements OnInit {
  public sub: any;
  public id: any;
  public numSolicitudes: number;

  public oferta = new OfertaModel();
  OfertasService: OfertasService = inject(OfertasService);

  constructor(
    private _homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private _titleService: Title
  ) {
    this.id = 0;
    this.numSolicitudes = 0;
    this._titleService.setTitle('Detalles oferta');
  }

  ngOnInit(): void {
    //Get id and its respective register through the api
    this.sub = this.route.paramMap.subscribe((parms) => {
      //console.log('ID oferta: ' + parms.get('id'));
      this.id = parms.get('id');
      this.OfertasService.getOferta(this.id).subscribe({
        next: (respuesta) => {
          this.oferta = respuesta;
        },
        error: (err) => {
          //CODIGO ERROR
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //Method to save data in a new Oferta object
  public saveOferta(response: any): void {
    this.oferta = response
    this.oferta.titulo = response.titulo.toUpperCase();
    this.numSolicitudes = Math.floor(Math.random() * (31 - 5) + 5);
    //console.log(this.oferta);
  }
}
