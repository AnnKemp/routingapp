import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


// const routes: Routes = [
//   { path: 'products', component: ProductsComponent },
//   { path: 'product/:id', component: ProductDetailsComponent }
// ];
const routes: Routes = [ // dus het 'submenu' wordt hier gebruikt om in layers dieper in de producten te duiken
  {
    path: 'products', // als je op products klikt krijg je de lijst met producten te zien
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent, // als je op een van de produktnamen klikt in deze lijst dan krijg de produkt-details te zien (maar weer terug op die lijst klikken om dan de gegevens van een ander product te zien te krijgen dat lukt dan weer niet, dus daar moet nog een andere oplossing voor worden gevonden)
        children: [
          {
            path: ':id',
            component: ProductDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
