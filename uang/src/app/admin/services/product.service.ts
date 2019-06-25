import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http : HttpClient) { }
  public url = "localhost:3000/product";
  addPro(obj : any){
  	return this.http.post(this.url, obj);
}}