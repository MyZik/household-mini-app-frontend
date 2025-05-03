import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CategoryItemComponent } from '../category-item/category-item.component';

interface CategoryItem {
    id: number;
    name: string;
    emoji: string;
    quantity: number;
}

interface Category {
    id: number;
    name: string;
    emoji: string;
    items: CategoryItem[];
}

@Component({
    selector: 'app-category-card',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatCardModule, CategoryItemComponent],
    templateUrl: './category-card.component.html',
    styleUrl: './category-card.component.less',
})
export class CategoryCardComponent {
    @Input() category!: Category;
    public expanded = input.required<boolean>();
    @Output() toggleExpand = new EventEmitter<number>();

    onTogglePanel(): void {
        this.toggleExpand.emit(this.category.id);
    }
}
