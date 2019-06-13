import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { CatnavComponent } from './catnav/catnav.component';
import { ProductComponent } from './product/product.component';
import { EachproComponent } from './eachpro/eachpro.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ImageComponent,
    CatnavComponent,
    ProductComponent,
    EachproComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
