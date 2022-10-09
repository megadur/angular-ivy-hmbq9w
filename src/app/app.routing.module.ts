import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './alfki/customers/customers.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './alfki/products/products.component';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { OrdersComponent } from './alfki/orders/orders.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'customers', component: CustomersComponent, canActivate: [AuthorizeGuard] },
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
