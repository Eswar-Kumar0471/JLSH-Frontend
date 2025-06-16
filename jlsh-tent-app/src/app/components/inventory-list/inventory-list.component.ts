import { Component, OnInit } from '@angular/core';
import { InventoryItem, InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.inventoryService.getAllItems().subscribe((data) => {
      this.items = data;
    });
  }

  deleteItem(id: number | undefined) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this item?')) {
      this.inventoryService.deleteItem(id).subscribe(() => {
        this.getItems(); // refresh list
      });
    }
  }
}
