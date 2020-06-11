import { Component } from '@angular/core';
import { slideInAnimation } from './animations'; /* er moet nog een module animations komen, hier importeren we één specifiek soort animatie: de slide-in-animation */
import { RouterOutlet } from '@angular/router'; // op de pagina-inhoud te tonen als je op de menu-items klikt

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  , animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'routingapp';

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
// getAnimationData wordt vanuit de html aangeroepen
getAnimationData(outlet: RouterOutlet) {
   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation; // om die animatie op de inhoud te zetten
 }
}
