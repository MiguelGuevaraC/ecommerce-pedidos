import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';
import { LoginComponent } from './pages/website/login/login.component';
import { LoginComponent2 } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'webSite/shop',
    pathMatch: 'full'
  },
  {
    path: 'webSite',
    children: [
      {
        path: 'shop',
        component: LandingComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent2
      },
      {
        path: 'products',
        component: ProductsComponent,
      }
    ]
  }
];
