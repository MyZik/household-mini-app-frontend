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

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
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

    constructor(private store: Store) {}

    public togglePanel(categoryId: number): void {
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
}
