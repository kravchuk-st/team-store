import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Catalog } from './pages/catalog/catalog';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', component: About },
  { path: 'catalog', component: Catalog },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: '**', redirectTo: 'about' },
];

