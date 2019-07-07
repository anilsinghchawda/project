import { Injectable } from '@angular/core';
import { userObj } from '../models';
import { logObj } from '../models';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogService {
public url = "http://localhost:3000";

logFun(obj : logObj){
 console.log("service posting obj for login", obj);
 return this.http.post(this.url, obj); 
}

get(){ 
	console.log("/ get at Service recieving", this.http.get(this.url))
	return this.http.get(this.url);
}
  constructor(private http : HttpClient ) { }
}


