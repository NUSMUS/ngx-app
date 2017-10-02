import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AutenticacionService } from '../../shared/services/autenticacion.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  reminderForm: FormGroup;
  userdata: any;

  erroresForm = {
    'email': ''
  }

  mensajesValidacion = {
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca una dirección email correcta'
    }
  }
  constructor(private formBuilder: FormBuilder, private autService: AutenticacionService, private router: Router, private activatedRouter: ActivatedRoute) { }

  
  ngOnInit() {
    this.reminderForm = this.formBuilder.group ({
      'email': ['', [Validators.required, Validators.email]]
    }); 
    this.reminderForm.valueChanges.subscribe(data =>
      this.onValueChanged(data));
      this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.reminderForm) {
      return;
    }
    const form = this.reminderForm;
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


  resetPassword(email: string) {
    this.autService.resetPassword(email);
  }

  onSubmit() {
    this.userdata = this.saveUserData();
    this.resetPassword(this.userdata);
    this.router.navigate(['/login']);
  }

  saveUserData() {
    const saveUserData = {
      email: this.reminderForm.get('email').value,
    };
    return saveUserData;
  }

}
