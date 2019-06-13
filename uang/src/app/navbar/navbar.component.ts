import { Component, OnInit } from '@angular/core';
import { obj } from '../models';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

 @Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  user : obj={
  contact : null,
  password : null,
  name : null,
  surname : null,
  email : null,
  address : null

    };

  constructor() { }
  empty(){
    this.user={} as obj; 
  }
  bool:boolean;
  signcheck(){
    this.user={} as obj;
  	this.bool=true;
  }
  logcheck(){
    this.user={} as obj;
  	this.bool=false;
  }
  login(){
    jQuery("#login").modal("hide");
    console.log(this.user.contact);
    console.log(this.user.password);

  }
  signup(){
    this.bool=false;
    jQuery("#login").modal("show");
  }
  ngOnInit() {
    jQuery("#login").modal("show");
  }
}
