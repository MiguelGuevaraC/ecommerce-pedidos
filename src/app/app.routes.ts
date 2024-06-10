import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { SignInComponent } from './pages/admin/sign-in/sign-in.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [
  // { path:'menu', title:'menu', children:[ ] }

  { path:'login', component:LoginComponent },
  { path:'signIn', component:SignInComponent },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'', component:LayoutComponent, children: [{ path: 'products', component: ProductsComponent }] }

];
