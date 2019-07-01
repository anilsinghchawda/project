import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cateStr} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	public url = "http://localhost:3000/category";

	getCate(){
		 return this.HttpClient.get(this.url);
	}
	addCate(a:cateStr){
		console.log("Service posting", a);
		return this.HttpClient.post(this.url, a);
	}
	delCate(id : number){
		console.log("Service posting for deleting ", id);
						return this.HttpClient.delete(this.url, $[id]);
	}
  constructor(private HttpClient : HttpClient) { }
}

