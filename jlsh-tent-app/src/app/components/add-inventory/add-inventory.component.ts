// src/app/components/add-inventory/add-inventory.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InventoryItem, InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html'
})
export class AddInventoryComponent {
  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryService
  ) {}

  inventoryForm = this.fb.group({
    type: ['', Validators.required],
    name: ['', Validators.required],
    sizeOrVariant: [''],
    quantityAvailable: [0, [Validators.required, Validators.min(0)]],
    unitPrice: [0, [Validators.required, Validators.min(0)]],
    description: [''],
    isActive: [true]
  });

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const newItem = this.inventoryForm.value as InventoryItem; // 🔥 Fix here
      this.inventoryService.addItem(newItem).subscribe({
        next: () => {
          alert('🎉 Item added successfully!');
          this.inventoryForm.reset({ isActive: true, quantityAvailable: 0, unitPrice: 0 });
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to add item.');
        }
      });
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.inventoryForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
