
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',    redirectTo: 'home',    pathMatch: 'full'  },
  { path: 'home', component: HomeComponent},
  
  { path: 'customer' , 
    loadChildren: () => import('./customers/customers.module').then(x => x.CustomersModule)},
 
    { path: 'orders' , loadChildren: () => import('./orders/orders.module').then(x => x.OrdersModule) },
  { path: '**' , component: PageNotFoundComponent }

];
//loadChildren: './customer/customer.module#CustomerModule' 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
