import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // dit is speciaal voor een submenu nog even checken. ..

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // die snapshot en paramMap nog even uitzoeken . . .
  }

  ngOnInit() {
  }

}
