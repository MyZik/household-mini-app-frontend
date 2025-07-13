import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoryItem {
    id: number;
    name: string;
    emoji: string;
    quantity: number;
    quantityType?: string;
}

@Component({
    selector: 'app-category-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './category-item.component.html',
    styleUrl: './category-item.component.less',
})
export class CategoryItemComponent {
    @Input() item!: CategoryItem;
    @Output() editQuantity = new EventEmitter<{
        itemId: number;
        itemName: string;
        quantity: number;
        quantityType: string;
    }>();

    protected onQuantityClick(): void {
        this.editQuantity.emit({
            itemId: this.item.id,
            itemName: this.item.name,
            quantity: this.item.quantity,
            quantityType: this.item.quantityType || 'piece',
        });
    }
}
