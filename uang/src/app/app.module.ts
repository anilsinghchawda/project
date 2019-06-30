import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ImageComponent } from './component/image/image.component';
import { CatnavComponent } from './component/catnav/catnav.component';
import { ProductComponent } from './component/product/product.component';
import { EachproComponent } from './component/eachpro/eachpro.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { AccountComponent } from './component/account/account.component';
import { ArrivalComponent } from './component/arrival/arrival.component';
import { SearchComponent } from './component/search/search.component';
import { KccComponent } from './component/kcc/kcc.component';
import { SoldComponent } from './component/sold/sold.component';
import { SeminarsComponent } from './component/seminars/seminars.component';
import { AdviserComponent } from './component/adviser/adviser.component';
import { ApplyComponent } from './component/apply/apply.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ShopComponent } from './component/shop/shop.component';

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
    CartComponent,
    AccountComponent,
    ArrivalComponent,
    SearchComponent,
    KccComponent,
    SoldComponent,
    SeminarsComponent,
    AdviserComponent,
    ApplyComponent,
    FeedbackComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
