// src/app/components/inventory/inventory.component.ts

import { Component, OnInit } from '@angular/core';
import { InventoryService, InventoryItem } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getAllItems().subscribe(data => {
      console.log('Fetched items:', data);  // 👀 Check if this logs correctly
      this.items = data;
    }, error => {
      console.error('Error fetching inventory:', error);
    });
  }
}
