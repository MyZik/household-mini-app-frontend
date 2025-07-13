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
import {
    isUpdatingCategoryDataSelector,
    isUpdatingCategoryVisibilitySelector,
    toggleCategoryVisibilityIconClickedAction,
} from '../../../application/categories';
import { CategoryItemFormComponent } from '../category-item-form/category-item-form.component';
import { LoadingDuckComponent } from '../../shared/components/loading-duck';
import { isLoadingItemsByCategorySelector } from '../../../domain/get-items-by-category';
import { CategoryDeleteConfirmationComponent } from '../category-delete-confirmation/category-delete-confirmation.component';
import { CategoryEditFormComponent } from '../category-edit-form/category-edit-form.component';
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BottomSheetComponent, BottomSheetAction } from '../bottom-sheet/bottom-sheet.component';

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
    isVisibleForCurrentUser: boolean;
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
        CategoryEditFormComponent,
        ModalWrapperComponent,
        MatProgressSpinnerModule,
        BottomSheetComponent,
    ],
    templateUrl: './category-card.component.html',
    styleUrl: './category-card.component.less',
})
export class CategoryCardComponent {
    public readonly category = input.required<Category>();
    public expanded = input.required<boolean>();
    protected isDeleteModalOpen = signal(false);
    protected isEditModalOpen = signal(false);
    protected isBottomSheetOpen = signal(false);

    protected isCreateItemFormActive = computed(() =>
        this.store.selectSignal(isCreateItemFormActiveSelector(this.category().id))()
    );

    protected isCreateItemFormSubmitted = computed(() =>
        this.store.selectSignal(isCreateItemFormSubmittedSelector(this.category().id))()
    );

    protected isCategoryItemsListLoading = computed(() =>
        this.store.selectSignal(isLoadingItemsByCategorySelector(this.category().id))()
    );

    protected isUpdatingVisibility = computed(() =>
        this.store.selectSignal(isUpdatingCategoryVisibilitySelector(this.category().id))()
    );

    protected isUpdatingCategoryData = computed(() =>
        this.store.selectSignal(isUpdatingCategoryDataSelector(this.category().id))()
    );

    @Output() toggleExpand = new EventEmitter<number>();
    @Output() deleteCategory = new EventEmitter<number>();
    @Output() editCategory = new EventEmitter<{ id: number; name: string; emoji: string }>();

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

    protected openBottomSheet(event: Event): void {
        event.stopPropagation();
        this.isBottomSheetOpen.set(true);
    }

    protected closeBottomSheet(): void {
        this.isBottomSheetOpen.set(false);
    }

    protected getBottomSheetActions(): BottomSheetAction[] {
        const categoryData = this.category();
        const isUpdating = this.isUpdatingVisibility() || this.isUpdatingCategoryData();
        
        return [
            {
                id: 'toggle-visibility',
                label: categoryData.isVisibleForCurrentUser ? 'Ausblenden' : 'Einblenden',
                icon: categoryData.isVisibleForCurrentUser ? 'visibility_off' : 'visibility',
                color: 'primary',
                disabled: isUpdating,
            },
            {
                id: 'edit',
                label: 'Bearbeiten',
                icon: 'edit',
                color: 'warning',
                disabled: isUpdating,
            },
            {
                id: 'delete',
                label: 'Löschen',
                icon: 'delete',
                color: 'danger',
                disabled: isUpdating,
            },
        ];
    }

    protected onBottomSheetAction(actionId: string): void {
        this.closeBottomSheet();
        
        switch (actionId) {
            case 'toggle-visibility':
                this.onToggleVisibility();
                break;
            case 'edit':
                this.onEditCategory();
                break;
            case 'delete':
                this.onDeleteCategory();
                break;
        }
    }

    protected onDeleteCategory(): void {
        this.isDeleteModalOpen.set(true);
    }

    protected closeDeleteModal(): void {
        this.isDeleteModalOpen.set(false);
    }

    protected confirmDelete(categoryId: number): void {
        this.deleteCategory.emit(categoryId);
        this.closeDeleteModal();
    }

    protected onToggleVisibility(): void {
        const categoryData = this.category();
        this.store.dispatch(
            toggleCategoryVisibilityIconClickedAction({
                categoryId: categoryData.id,
                isVisible: !categoryData.isVisibleForCurrentUser,
            })
        );
    }

    protected onEditCategory(): void {
        this.isEditModalOpen.set(true);
    }

    protected closeEditModal(): void {
        this.isEditModalOpen.set(false);
    }

    protected confirmEdit(data: { id: number; name: string; emoji: string }): void {
        this.editCategory.emit(data);
        this.closeEditModal();
    }
}
