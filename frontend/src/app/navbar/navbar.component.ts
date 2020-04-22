import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import * as  $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Input() titreNavbar;

  ngOnInit(): void {

  }

} 
