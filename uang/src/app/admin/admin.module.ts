import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [CategoryComponent,
  NavbarComponent, 
  HomeComponent, 
  ProductComponent, 
  UsersComponent, AdminComponent],
  imports:[
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
    ],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
