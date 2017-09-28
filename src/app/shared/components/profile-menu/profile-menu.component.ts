import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

  nombre = "Noé Hoyos Quiroz";
  constructor() { }

  ngOnInit() {
  }

}

