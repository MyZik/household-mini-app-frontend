import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingDuckComponent } from '../../shared/components/loading-duck';
import { Store } from '@ngrx/store';
import { householdCategoriesWithItemsSelector } from '../../../application/households/selectors/household-categories-with-items.selector';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatExpansionModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        LoadingDuckComponent,
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
