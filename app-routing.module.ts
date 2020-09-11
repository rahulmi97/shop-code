import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { itemOpr } from './Model/itemOperations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListComponent } from './customer/list/list.component';
import { SortComponent } from './customer/sort/sort.component';
import { SearchComponent } from './customer/search/search.component';
import { CartComponent } from './customer/cart/cart.component';

const routes: Routes = [
  {path:'',component:LogInComponent},
  {path:'admin',component:AdminComponent},
  {path:'customer',component:CustomerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
FormsModule,
ReactiveFormsModule
  ],
  providers:[],
  exports: [RouterModule],
  declarations: [AdminComponent, CustomerComponent, LogInComponent, ListComponent, SortComponent, SearchComponent, CartComponent]
})
export class AppRoutingModule { }
