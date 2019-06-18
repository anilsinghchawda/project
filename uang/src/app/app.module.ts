import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AdminModule } from './admin/admin.module';


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
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { SearchComponent } from './search/search.component';
import { KccComponent } from './kcc/kcc.component';
import { SoldComponent } from './sold/sold.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { AdviserComponent } from './adviser/adviser.component';
import { ApplyComponent } from './apply/apply.component';
import { FeedbackComponent } from './feedback/feedback.component';

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
    FeedbackComponent
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
