import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; wat is dit even onderzoeken waar dit voor dient
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductsModule } from './products/products.module'; die moet ik nog in orde maken

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule, nog even uitzoeken waar dit voor dient
    // ProductsModule,  // deze nog even in orde maken
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





