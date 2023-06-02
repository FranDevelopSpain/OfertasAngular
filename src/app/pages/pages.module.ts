import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './ofertas/oferta/oferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './ofertas/nueva-oferta/nueva-oferta.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    OfertasComponent,
    OfertaComponent,
    NuevaOfertaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [],
  providers: []
})
export class PagesModule { }
