import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
const routes : Routes = [
{
	path : 'admin', component : ProductComponent
},{
	path : 'category', component : CategoryComponent
},{
	path : 'users', component : UsersComponent
}];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
