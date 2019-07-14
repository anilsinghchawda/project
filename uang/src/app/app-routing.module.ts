import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
{
path : 'admin', redirectTo :'admin', pathMatch : 'full'
},
{
path : '' , component : HomeComponent
},{
path : 'home' , component : HomeComponent
},{
	path : 'shop', component : ShopComponent
},{
	path : 'profile', component : ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
