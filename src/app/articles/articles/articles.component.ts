import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article = {
    id: 100,
    title: 'How to make router & navigation in Angular 8',
    author: 'Didin J.',
    description: 'A complete tutorial about creating router and navigation in the Angular 8 Web Application'
  };

  constructor(private router: Router) { } // hier wordt dus de Router aangroepen . . . voor die this.router wat verder op in de functie . . . .

  ngOnInit() {
  }

  gotoDetails(articleId: any) {
    this.router.navigate(['/article/', articleId]); // deze functie wordt on click aanroepen vanuit de articles.component.html en de id wordt daar meegegeven
  }

}
