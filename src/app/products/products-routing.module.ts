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
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
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
