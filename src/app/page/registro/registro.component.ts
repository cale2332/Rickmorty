import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre = new FormControl('');
  contrasenia = new FormControl('');
  correo = new FormControl('');
  semuestra: boolean = false;
  mensaje:string = ''
  constructor() { }

  ngOnInit(): void {
  }


  
  login(form){
    const usuario = { nombre: form.value.nombre, contrasenia: form.value.contrasenia, correo : form.value.correo };
   
    //console.log(this.correo)
  }

  onSubmit(f: NgForm) {

    if(f.valid) {
      debugger;
      this.semuestra = true
      this.mensaje = `Se guardo con exito, el usuario ${f.value.nombre}`;
    }

  }
}
