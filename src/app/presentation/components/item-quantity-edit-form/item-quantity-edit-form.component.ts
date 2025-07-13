import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ItemQuantityEditData {
    itemName: string;
    itemId: number;
    quantity: number;
    quantityType: string;
}

interface QuantityType {
    value: string;
    label: string;
}

@Component({
    selector: 'app-item-quantity-edit-form',
    standalone: true,
    imports: [CommonModule, CustomButtonComponent, ReactiveFormsModule],
    templateUrl: './item-quantity-edit-form.component.html',
    styleUrl: './item-quantity-edit-form.component.less',
})
export class ItemQuantityEditFormComponent implements OnInit {
    public readonly itemData = input.required<ItemQuantityEditData>();

    @Output() confirmEdit = new EventEmitter<{
        id: number;
        quantity: number;
        quantityType: string;
    }>();
    @Output() cancelEdit = new EventEmitter<void>();

    protected editForm!: FormGroup;

    protected quantityTypes: QuantityType[] = [
        { value: 'piece', label: 'Stück' },
        { value: 'package', label: 'Packung' },
        { value: 'liter', label: 'Liter' },
        { value: 'milliliter', label: 'Milliliter' },
        { value: 'gram', label: 'Gramm' },
        { value: 'kilogram', label: 'Kilogramm' },
    ];

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    private initializeForm(): void {
        const data = this.itemData();
        this.editForm = this.formBuilder.group({
            quantity: [data.quantity, [Validators.required, Validators.min(0)]],
            quantityType: [data.quantityType, [Validators.required]],
        });
    }

    protected onConfirmEdit(): void {
        if (this.editForm.valid) {
            const formValue = this.editForm.value;
            const itemId = this.itemData().itemId;

            this.confirmEdit.emit({
                id: itemId,
                quantity: formValue.quantity,
                quantityType: formValue.quantityType,
            });
        }
    }

    protected handleSubmit(): void {
        if (this.editForm.valid) {
            this.onConfirmEdit();
        }
    }

    protected onCancelEdit(): void {
        this.cancelEdit.emit();
    }
} 