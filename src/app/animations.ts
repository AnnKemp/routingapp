// heel het animatie-gedeelte heb ik letterlijk gecopy-paste, daar moet ik later nog aan werken
import { // hier importeren we de onderdelen van angular/animations die we nodig hebben
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [ // big trigger is de routeAnimation
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
          animate('300ms ease-out', style({ left: '0%'})) // beb ease-out on enter van links op 0%
        ])
      ]),
      query(':enter', animateChild()), // het kind, hetgeen erin zit wordt mee geanimeerd
    ])
  ]);
