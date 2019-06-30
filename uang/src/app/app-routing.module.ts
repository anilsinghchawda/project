import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component'
import { ShopComponent } from './component/shop/shop.component'

const routes: Routes = [
{
path : 'admin', redirectTo :'admin', pathMatch : 'full'
},
{
path : '' , component : HomeComponent
},{
	path : 'shop', component : ShopComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
