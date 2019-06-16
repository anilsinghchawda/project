import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

public data : number[] = [1,2,3,4,5,6,7,8,9,12,13,14,1];

  ngOnInit() {
  }

}
