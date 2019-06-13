import { Injectable } from '@angular/core';
import { obj } from '../models';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogService {

loginFun(user : obj){
	let url = "localhost:3000/login";
	return this.http.post(url, user);
}
  constructor(private http : HttpClient ) { }
}

