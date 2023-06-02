import { Component, inject, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  public ofertasArray: Array<any>;
  usuario!: LoginModel | null;
  OfertasService:OfertasService = inject(OfertasService)
  constructor(
    private _titleService: Title,
    private _homeService: HomeService,
    private _loginService: LoginService,
    private router: Router,
  ) {
    //Title:
    this._titleService.setTitle('Ofertas - Admin');

    //Data Array:
    this.ofertasArray = [];

    //Login
    this._loginService.login.subscribe(usuario => this.usuario = usuario);
  }

  ngOnInit(): void {
    //Get data if you are logged
    this.getOfertas();

  }

  //View all data
  public getOfertas(): void {
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
    this.router.navigate(['/home/ofertas/', id])
  }

  public OfertaDelete(id: number): void {
    //Remove of the register with id through Home service
    this.OfertasService.deleteOferta(id)
    .subscribe(
      respuesta => {
        console.log('Delete successful oferta: ' + id);
        this.ngOnInit(); //Refresh the component to show the changes
      },
      error => {
        console.log(JSON.stringify(error));
      }
    )
  }

}
