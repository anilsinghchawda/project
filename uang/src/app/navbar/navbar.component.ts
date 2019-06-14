import { Component, OnInit } from '@angular/core';
import { obj } from '../models';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { LogService } from '../services/log.service';
import { Observable } from 'rxjs';

 @Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

public  otp = false;
  user : obj={
  contact : null,
  password : null,
  name : null,
  surname : null,
  email : null,
  address : null

    };

  constructor(private dulClass : LogService) { }
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
    jQuery("#login").modal("show");
    console.log("Navbar sending", this.user);
    this.dulClass.signFun(this.user).subscribe((back : any)=>{
    this.bool = false;
    this.user = {} as obj;
    this.otp=true;
    console.log("SignUP successfull(navbar component says)");
  })

  }
  obje={
    name:null,
    age:null
  }
  comeObj:{
    name : string;
    age :number;
  }

  get(){
    console.log("/ get recieve at navbar", this.comeObj);
    this.dulClass.get().subscribe((come : any)=>{
      this.comeObj=come;
    })
  }
  ngOnInit() {
    jQuery("#login").modal("show");
  }
}
