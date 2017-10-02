import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AutenticacionService } from '../../shared/services/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup;
  userdata: any;

  erroresForm = {
    'email': '',
    'password': '',
    'confirm': ''
  }

  mensajesValidacion = {
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca una direccion email correcta'
    },
    'password': {
      'required': 'Contraseña obligatoria',
      'pattern': 'La contraseña debe tener al menos una letra y un numero',
      'minlength': 'y más de 6 caracteres',
      'confirmPass': 'Confirma contraseña'
    }
  }
  constructor(private formBuilder: FormBuilder, private autServie: AutenticacionService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group ({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(6)]],
      'confirm': ['',Validators.required]
       //concepto: ['',Validators.compose([Validators.required, Validators.minLength(10)])],
    });
    this.registroForm.valueChanges.subscribe(data =>
      this.onValueChanged(data));
      this.onValueChanged();
  }

  confirmPass() {
    const val = this.registroForm.value;
    return val && val.password && val.password == val.confirm;
  }

  onValueChanged(data?: any) {
    if (!this.registroForm) {
      return;
    }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + '';
        }
      }
    }
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    this.autServie.registroUsuario(this.userdata);
    this.router.navigate(['/login'])
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value,
    };
    return saveUserdata;
  }

}
