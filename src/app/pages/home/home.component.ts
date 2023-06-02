import { HomeService } from './../../services/home.service';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertaModel } from 'src/app/models/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  public ofertasArray: OfertaModel[];
  OfertasService: OfertasService = inject(OfertasService);

  constructor(
    private router: Router,
    private _titleService: Title
  ) {
    //Title:
    this._titleService.setTitle('Ofertas');

    //Data array:
    this.ofertasArray = [];
  }

  ngOnInit(): void {
    //Get data
    this.getOfertas();
  }

  //View all data
  private getOfertas(): void {
    this.OfertasService.getOfertas().subscribe({
      next: (respuesta) => {
        this.ofertasArray = respuesta
      },
      error: (err) => {
        //CODIGO ERROR
      },
    });
  }

  //View details of register with id
  public goToOfertaDetail(id: number): void {
    this.router.navigate(['/home/ofertas/', id]);
  }

  //Setter to change page's title althrough Browser Module
  private setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }
}
