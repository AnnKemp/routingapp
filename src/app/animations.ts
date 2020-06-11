// Deze animatie trekt op niks, is niet subtiel of smaakvol maar de principes zijn wél interessant om later een eigen betere versie van te maken

import { // hier importeren we de onderdelen van angular/animations die we nodig hebben
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [ // big trigger is de routeAnimation, daarin is alles genest
    transition('articles <=> article', [ // ik denk dat die animatie alleen op articles staat . . . even testen en eventueel aanpassen
      style({ position: 'relative' }), // css voor de animatie, de positioning
      query(':enter, :leave', [ // de triggers voor de animatie
        style({ // dit is de css voor de animatie bij enter en leave
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [ // op enter komt er een animatie van de css left -100
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()), // het kind dat erin zit wordt on leave geanimeerd
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'})) // nen ease-out on leave van links 100%
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'})) // nen ease-out on enter van links op 0%
        ])
      ]),
      query(':enter', animateChild()), // het kind, hetgeen erin zit wordt mee geanimeerd
    ])
  ]);
