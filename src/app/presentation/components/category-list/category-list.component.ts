import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoadingDuckComponent } from '../../shared/components';
import { Store } from '@ngrx/store';
import { householdCategoriesWithItemsSelector } from '../../../application/households/selectors/household-categories-with-items.selector';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ErrorMessageComponent } from '../../shared/components';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        LoadingDuckComponent,
        CategoryCardComponent,
        ErrorMessageComponent
    ],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    public expandedPanels: Set<number> = new Set<number>();

    protected categories = this.store.selectSignal(householdCategoriesWithItemsSelector);

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
}
