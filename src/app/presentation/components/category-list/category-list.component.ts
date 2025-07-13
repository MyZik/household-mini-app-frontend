import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent, LoadingDuckComponent } from '../../shared/components';
import { Store } from '@ngrx/store';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import {
    createCategoryFormOpenedAction,
    isCreateCategoryFormActiveSelector,
    isCreateCategorySubmittingSelector,
    isDeleteCategoryLoadingSelector,
    editCategoryIconClickedAction,
} from '../../../application/categories';
import { CategoryCreateFormComponent } from '../category-create-form';
import { 
    categoryCollapsedAction,
    itemQuantityEditModalOpenedAction, 
    itemQuantityEditModalClosedAction,
    quantityEditModalItemSelector,
    isQuantityEditModalOpenSelector,
    combinedHouseholdCategoriesWithItemsSelector
} from '../../../application/items';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';
import { ItemQuantityEditFormComponent } from '../item-quantity-edit-form/item-quantity-edit-form.component';
import { callDeleteCategoryRequestedAction } from '../../../domain/delete-category';
import { callUpdateCategoryDataRequestedAction } from '../../../domain/update-category-data';
import { callUpdateItemQuantityRequestedAction } from '../../../domain/update-item-quantity';
import { callUpdateItemDataRequestedAction } from '../../../domain/update-item-data';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        LoadingDuckComponent,
        CategoryCardComponent,
        ErrorMessageComponent,
        CustomButtonComponent,
        CategoryCreateFormComponent,
        ModalWrapperComponent,
        ItemQuantityEditFormComponent,
    ],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    public expandedPanels: Set<number> = new Set<number>();

    protected categories = this.store.selectSignal(combinedHouseholdCategoriesWithItemsSelector);
    protected isCreateFormActive = this.store.selectSignal(isCreateCategoryFormActiveSelector);
    protected isCreateCategorySubmitting = this.store.selectSignal(
        isCreateCategorySubmittingSelector
    );
    protected isDeleteCategoryLoading = computed(() =>
        this.store.selectSignal(isDeleteCategoryLoadingSelector)()
    );
    protected quantityEditModalItem = this.store.selectSignal(quantityEditModalItemSelector);
    protected isQuantityEditModalOpen = this.store.selectSignal(isQuantityEditModalOpenSelector);

    constructor(private store: Store) {}

    public togglePanel(categoryId: number): void {
        this.store.dispatch(
            categoryCollapsedAction({
                categoryId: categoryId,
            })
        );

        if (this.expandedPanels.has(categoryId)) {
            this.expandedPanels.delete(categoryId);
        } else {
            this.expandedPanels.add(categoryId);
        }
    }

    public isPanelExpanded(categoryId: number): boolean {
        return this.expandedPanels.has(categoryId);
    }

    protected openCreateForm() {
        this.store.dispatch(createCategoryFormOpenedAction());
    }

    protected onDeleteCategory(categoryId: number): void {
        this.store.dispatch(
            callDeleteCategoryRequestedAction({
                categoryId: categoryId,
            })
        );
    }

    protected onEditCategory(data: { id: number; name: string; emoji: string }): void {
        this.store.dispatch(
            editCategoryIconClickedAction({
                categoryId: data.id,
                name: data.name,
                emoji: data.emoji,
            })
        );
    }

    protected onEditItemQuantity(data: { itemId: number; itemName: string; quantity: number; quantityType: string }): void {
        this.store.dispatch(
            itemQuantityEditModalOpenedAction({
                itemId: data.itemId,
                itemName: data.itemName,
                quantity: data.quantity,
                quantityType: data.quantityType,
            })
        );
    }

    protected closeQuantityEditModal(): void {
        this.store.dispatch(itemQuantityEditModalClosedAction());
    }

    protected confirmQuantityEdit(data: { id: number; quantity: number; quantityType: string }): void {
        this.store.dispatch(
            callUpdateItemQuantityRequestedAction({
                itemId: data.id,
                quantity: data.quantity,
                quantityType: data.quantityType,
            })
        );
        this.closeQuantityEditModal();
    }

    protected onEditItemData(data: { itemId: number; name: string; emoji: string; quantity: number; quantityType: string }): void {
        this.store.dispatch(
            callUpdateItemDataRequestedAction({
                itemId: data.itemId,
                name: data.name,
                emoji: data.emoji,
                quantity: data.quantity,
                quantityType: data.quantityType,
            })
        );
    }
}
