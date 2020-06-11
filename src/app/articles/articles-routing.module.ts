// om het submenu te maken
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [ // hier worden de paden en linken naar de componenten gemaakt
  { path: 'articles', component: ArticlesComponent, data: { animation: 'articles' } }, // de animatie wordt hier aangeroepen
  { path: 'article/:id', component: ArticleDetailsComponent, data: { animation: 'article' } } // de animatie wordt hier aangeroepen, nog eens checken
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // for child is om een submenu aan te maken (een uitklapmenu in dit geval)
  exports: [RouterModule]
})
export class ArticlesRoutingModule { } // deze moet ik nu ook gaan aanroepen in app! Niet vergeten of het werkt niet!
