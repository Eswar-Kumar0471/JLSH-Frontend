import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
})
export class EditInventoryComponent implements OnInit {
  editForm!: FormGroup;
  itemId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    this.editForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      sizeOrVariant: [''],
      quantityAvailable: [0, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      isActive: [true]
    });

    this.inventoryService.getItemById(this.itemId).subscribe(item => {
      this.editForm.patchValue(item);
    });
  }

  onSubmit() {
    if (this.editForm.invalid) return;

    this.inventoryService.updateItem(this.itemId, this.editForm.value).subscribe(() => {
      alert('Item updated successfully!');
      this.router.navigate(['/']);
    });
  }
}
