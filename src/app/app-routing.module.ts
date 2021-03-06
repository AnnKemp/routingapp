import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })], // zo kan je het volgen op welk menu-item je klikt in de console van je browser
  exports: [RouterModule]
})
export class AppRoutingModule { }
// uitgebreide info over routing zie angular.io/guide/router

// hier wordt het products of articles totaal NIET aangeroepen of vermeldt!!!




