import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../shared/components/custom-button';

interface DialogData {
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
    @Input() data!: DialogData;
    @Output() confirmDelete = new EventEmitter<number>();
    @Output() cancelDelete = new EventEmitter<void>();

    protected onConfirmDelete(): void {
        this.confirmDelete.emit(this.data.categoryId);
    }

    protected onCancelDelete(): void {
        this.cancelDelete.emit();
    }
}
