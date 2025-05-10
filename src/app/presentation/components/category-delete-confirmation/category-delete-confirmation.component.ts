import { Component, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../shared/components/custom-button';

interface CategoryData {
    categoryName: string;
    categoryId: number;
}

@Component({
    selector: 'app-category-delete-confirmation',
    standalone: true,
    imports: [CommonModule, CustomButtonComponent],
    templateUrl: './category-delete-confirmation.component.html',
    styleUrl: './category-delete-confirmation.component.less',
})
export class CategoryDeleteConfirmationComponent {
    public readonly categoryData = input.required<CategoryData>();
    @Output() confirmDelete = new EventEmitter<number>();
    @Output() cancelDelete = new EventEmitter<void>();

    protected onConfirmDelete(): void {
        const dialogData = this.categoryData();

        this.confirmDelete.emit(dialogData.categoryId);
    }

    protected onCancelDelete(): void {
        this.cancelDelete.emit();
    }
}
