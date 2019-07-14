import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cateStr} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	public url = "http://localhost:3000/category";

	getCate(){
		 return this.http.get(this.url);
	}
	addCate(a:cateStr){
		console.log("Service posting", a);
		return this.http.post(this.url, a);
	}
	delCate(id : number){
		console.log("Service posting for deleting ", id);
		return this.http.delete(this.url, $[id]);
	}
  constructor(private http : HttpClient) { }
}

