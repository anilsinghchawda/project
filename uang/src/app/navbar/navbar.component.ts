import { Component, OnInit } from '@angular/core';
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
 
  constructor(private dulClass : LogService) { }
  empty(){
  }
  sign:boolean;
  signcheck(){
  	this.sign=true;
  }
  otpCheck(){
    this.otp = true;
  }
  logcheck(){
  	this.sign=false;
    this.otp = false;
  }
  login(obj :NgForm):void{
    console.log("....................", obj.value);

    jQuery("#login").modal("hide");

  }
  signup(obj : NgForm):void{
    jQuery("#login").modal("show");
    console.log("Navbar sending");
    this.dulClass.signFun(obj).subscribe((back : any)=>{
    this.sign = false;
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
