import { Component, computed, EventEmitter, input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import { Store } from '@ngrx/store';
import {
    createItemButtonClickedAction,
    isCreateItemFormActiveSelector,
    isCreateItemFormSubmittedSelector,
} from '../../../application/items';
import { CategoryItemFormComponent } from '../category-item-form/category-item-form.component';
import { LoadingDuckComponent } from '../../shared/components/loading-duck';
import { isLoadingItemsByCategorySelector } from '../../../domain/get-items-by-category';
import { CategoryDeleteConfirmationComponent } from '../category-delete-confirmation/category-delete-confirmation.component';
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';

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
    imports: [
        CommonModule,
        MatIconModule,
        MatCardModule,
        CategoryItemComponent,
        CustomButtonComponent,
        CategoryItemFormComponent,
        LoadingDuckComponent,
        CategoryDeleteConfirmationComponent,
        ModalWrapperComponent,
    ],
    templateUrl: './category-card.component.html',
    styleUrl: './category-card.component.less',
})
export class CategoryCardComponent {
    public readonly category = input.required<Category>();
    public expanded = input.required<boolean>();
    protected isDeleteModalOpen = signal(false);

    protected isCreateItemFormActive = computed(() =>
        this.store.selectSignal(isCreateItemFormActiveSelector(this.category().id))()
    );

    protected isCreateItemFormSubmitted = computed(() =>
        this.store.selectSignal(isCreateItemFormSubmittedSelector(this.category().id))()
    );

    protected isCategoryItemsListLoading = computed(() =>
        this.store.selectSignal(isLoadingItemsByCategorySelector(this.category().id))()
    );

    @Output() toggleExpand = new EventEmitter<number>();
    @Output() deleteCategory = new EventEmitter<number>();

    constructor(private readonly store: Store) {}

    protected onTogglePanel(): void {
        this.toggleExpand.emit(this.category().id);
    }

    protected openCreateItemForm() {
        this.store.dispatch(
            createItemButtonClickedAction({
                categoryId: this.category().id,
            })
        );
    }

    protected onDeleteCategory(event: Event): void {
        event.stopPropagation();
        this.isDeleteModalOpen.set(true);
    }

    protected closeDeleteModal(): void {
        this.isDeleteModalOpen.set(false);
    }

    protected confirmDelete(categoryId: number): void {
        this.deleteCategory.emit(categoryId);
        this.closeDeleteModal();
    }
}
