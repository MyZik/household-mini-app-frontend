import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent, LoadingDuckComponent } from '../../shared/components';
import { Store } from '@ngrx/store';
import { householdCategoriesWithItemsSelector } from '../../../application/households';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import {
    createCategoryFormOpenedAction,
    isCreateCategoryFormActiveSelector,
    isCreateCategorySubmittingSelector,
} from '../../../application/categories';
import { CategoryCreateFormComponent } from '../category-create-form';
import { categoryCollapsedAction } from '../../../application/items';
import { MatDialogModule } from '@angular/material/dialog';
import { callDeleteCategoryRequestedAction } from '../../../domain/delete-category';

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
    ],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    public expandedPanels: Set<number> = new Set<number>();

    protected categories = this.store.selectSignal(householdCategoriesWithItemsSelector);
    protected isCreateFormActive = this.store.selectSignal(isCreateCategoryFormActiveSelector);
    protected isCreateCategorySubmitting = this.store.selectSignal(
        isCreateCategorySubmittingSelector
    );

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
}
