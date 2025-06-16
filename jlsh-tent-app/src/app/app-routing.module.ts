// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingFormComponent } from './bookings/booking-form/booking-form.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'booking', component: BookingFormComponent },
  { path: 'inventory', component: InventoryListComponent },
  { path: 'add-item', component: AddInventoryComponent },
  { path: 'view-items', component: ViewInventoryComponent },
  {
    path: 'edit-item/:id',
    component: EditInventoryComponent
  },
  

  { path: '**', redirectTo: '' } // fallback to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule,],
  exports: [RouterModule]
})
export class AppRoutingModule {}
