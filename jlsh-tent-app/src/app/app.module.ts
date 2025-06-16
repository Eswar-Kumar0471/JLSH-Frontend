import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BookingFormComponent } from './bookings/booking-form/booking-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingFormComponent,
    InventoryComponent,
    InventoryListComponent,
    AddInventoryComponent,
    AddInventoryComponent,
    ViewInventoryComponent,
    EditInventoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
