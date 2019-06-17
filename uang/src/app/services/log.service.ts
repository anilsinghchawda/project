import { Injectable } from '@angular/core';
import { obj } from '../models';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogService {
public url = "http://localhost:3000";
signFun(user : obj){
	console.log("service forwarding", user)
	return this.http.post(this.url, user);
}
get(){
	console.log("/ get at Service recieving", this.http.get(this.url))
	return this.http.get(this.url);
}
  constructor(private http : HttpClient ) { }
}


