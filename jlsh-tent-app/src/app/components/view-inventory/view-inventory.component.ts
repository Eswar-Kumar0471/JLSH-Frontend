import { Component, OnInit } from '@angular/core';
import { InventoryItem, InventoryService } from '../../services/inventory.service';
@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
})
export class ViewInventoryComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getAllItems().subscribe({
      next: (items) => this.inventoryItems = items,
      error: (err) => console.error('Error fetching inventory:', err),
    });
  }
}
