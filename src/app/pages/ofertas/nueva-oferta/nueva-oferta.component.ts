import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OfertaModel } from 'src/app/models/oferta.model';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css'],
})
export class NuevaOfertaComponent implements OnInit {
  ofertaForm: FormGroup;
  isLoading: boolean = false;
  sending: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _ofertasService: OfertasService,
    private _titleService: Title,
    private router: Router
  ) {
    this._titleService.setTitle('Nueva oferta');
    this.ofertaForm = this.fb.group({
      titulo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ]),
      ],
      descripcion: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(300),
        ]),
      ],
      empresa: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)]),
      ],
      salario: ['', Validators.required],
      ciudad: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)]),
      ],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      checkbox: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.sending = true;
    //console.log(this.ofertaForm.controls);
    if (this.ofertaForm.valid) {
      this.isLoading = true;
      this._ofertasService.registerOferta(this.generateNuevaOferta()).subscribe(
        (respuesta) => {
          console.log(JSON.stringify(respuesta));
          this.isLoading = false;
          this.router.navigate(['/home/ofertas-admin']);
        },
        (error) => {
          console.log(JSON.stringify(error));
          this.isLoading = false;
        }
      );
    }
  }

  public generateNuevaOferta(): OfertaModel {
    return this.ofertaForm.value;
  }
}
