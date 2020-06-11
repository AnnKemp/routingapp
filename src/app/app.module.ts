import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductsModule } from './products/products.module'; die moet ik nog in orde maken
// dus voor animations-module importeer je die van angular in de module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [ // deze vermeldt je deze nog eens bij de imports
    BrowserModule,
    // ProductsModule,  // deze nog even in orde maken
    AppRoutingModule, // voor de routing voor het menu
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





