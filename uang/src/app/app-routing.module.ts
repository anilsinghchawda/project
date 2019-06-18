import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
{
path : 'admin', redirectTo :'admin', pathMatch : 'full'
},
{
path : '' , component : HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
