import { Component, OnInit } from '@angular/core';
import { InventoryItem, InventoryService } from 'src/app/services/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit(): void {
    this.inventoryService.getAllItems().subscribe((data) => {
      this.items = data;
    });
  }

  deleteItem(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.inventoryService.deleteItem(id).subscribe(() => {
        // Remove from local array
        this.items = this.items.filter(item => item.id !== id);
      });
    }
  }
  
}
