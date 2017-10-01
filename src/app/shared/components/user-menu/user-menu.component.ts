import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AutenticacionService } from './../../services/autenticacion.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private autService: AutenticacionService, private router: Router) { }

  ngOnInit() {

  }
  logout() {
    this.autService.logout();
    this.router.navigate(['/login']);
  }

}
