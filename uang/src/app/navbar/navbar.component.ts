import { Component, OnInit } from '@angular/core';
import { obj } from '../models';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { LogService } from '../services/log.service';
import { Observable } from 'rxjs';
import { MatInput } from '@angular/material/input';
 

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


 @Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

public  otp = false;
  user : obj={
  contact : null,
  password : null,
  name : null,
  surname : null,
  email : null,
  address : null
  };
// user = {} as obj;
  constructor(private dulClass : LogService) { }
  empty(){
    this.user={} as obj; 
  }
  sign:boolean;
  signcheck(){
    this.user={} as obj;
  	this.sign=true;
  }
  otpCheck(){
    this.otp = true;
  }
  logcheck(){
    this.user={} as obj;
  	this.sign=false;
    this.otp = false;
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
    this.sign = false;
    this.user = {} as obj;
    this.otp=false;
    console.log("SignUP successfull(navbar component says)");
    return back;
  })

  }
  comeObj:{
    name:null,
    age:null
  }
 
  get(){
   this.dulClass.get().subscribe((come : any)=>{
     console.log(this.comeObj);
     return this.comeObj=come;
   });
  };


  ngOnInit() {
    this.sign = false;
    this.otp = false;
    jQuery("#login").modal("show");
  }
}
