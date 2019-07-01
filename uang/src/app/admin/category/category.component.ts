import { Component, OnInit } from '@angular/core';
import { cateStr } from '../models';
import { Observable } from 'rxjs';

import { CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	public cate : cateStr[];
	public newCate : cateStr={
		name:null,
		_id : null
	};
	add(){
		console.log("category.ts sending..", this.newCate.name);
		this.dulClass.addCate(this.newCate).subscribe((info : any)=>{
			console.log("respond on category.ts",info);
			jQuery("#add").modal("hide");
			this.cate.push(info);
			// return this.cate=info;
		})
	}
	public cateObj : cateStr;
	askDel(a:cateStr){
		this.cateObj=a;
	}
	del(){
		var index = this.cate.indexOf(this.cateObj);
		console.log(this.cateObj._id);
		this.dulClass.delCate(this.cateObj._id).subscribe((info : any)=>{
			console.log("Deleted", index);
			console.log("Deleted obj", info);
			this.cate.splice(index, 1);
			jQuery("#del").modal("hide")	
		})
	}
  constructor(private dulClass : CategoryService) { }
  ngOnInit() {
  	this.cate = {} as cateStr[];
  this.dulClass.getCate().subscribe((data : any)=>{
  	return this.cate= data;
  });	  		
}
}