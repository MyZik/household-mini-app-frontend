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
    createCategoryButtonClickedAction,
    isCreateCategoryFormActiveSelector,
} from '../../../application/categories';
import { CategoryCreateFormComponent } from '../category-create-form';
import { categoryCollapsedAction } from '../../../application/items';
import { isCreateCategoryFormSubmittedSelector } from '../../../application/categories/selectors/is-create-category-form-submitted.selector';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CategoryDeleteConfirmationComponent } from '../category-delete-confirmation/category-delete-confirmation.component';
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
        CategoryDeleteConfirmationComponent,
    ],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    public expandedPanels: Set<number> = new Set<number>();

    protected categories = this.store.selectSignal(householdCategoriesWithItemsSelector);
    protected isCreateFormActive = this.store.selectSignal(isCreateCategoryFormActiveSelector);
    protected isCreateFormSubmitted = this.store.selectSignal(
        isCreateCategoryFormSubmittedSelector
    );

    constructor(
        private store: Store,
        private dialog: MatDialog
    ) {}

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
        this.store.dispatch(createCategoryButtonClickedAction());
    }

    protected onDeleteCategory(categoryId: number): void {
        this.store.dispatch(
            callDeleteCategoryRequestedAction({
                categoryId: categoryId,
            })
        );
    }
}
