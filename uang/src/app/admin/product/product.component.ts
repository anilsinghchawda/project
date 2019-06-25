import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	reObj : NgForm;

  constructor(private dulClass : ProductService) { }
  save(obj: NgForm):void{
  	console.log(obj.value);
  	this.dulClass.addPro(obj).subscribe((obj : any)=>{
  		return this.reObj = obj;
  	})
  }
  ngOnInit() {
  }

}
