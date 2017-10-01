import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AutenticacionService {

  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log(error);
      })
  }

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    
  }
  
  inicioSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email,userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/pages/dashboard']);
      })
      .catch(error => {
        console.log(error);
      })
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      
      this.router.navigate(['/login']);
    }
  }

  logout() {
    firebase.auth().signOut();
  }
}
