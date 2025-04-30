import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {callGetHouseholdCategoriesRequestedAction} from '../../../domain/get-household-categories';
import {callGetHouseholdItemsRequestedAction} from '../../../domain/get-household-items';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import {
  CategoryWithItems,
  householdCategoriesWithItemsSelector
} from '../../../application/households/selectors/household-categories-with-items.selector';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {
  public expandedPanels: Set<number> = new Set<number>();

  protected categories = this.store.selectSignal(householdCategoriesWithItemsSelector);

  constructor(private store: Store) {
  }

  // Kategorie auf- oder zuklappen
  public togglePanel(categoryId: number): void {
    if (this.expandedPanels.has(categoryId)) {
      this.expandedPanels.delete(categoryId);
    } else {
      this.expandedPanels.add(categoryId);
    }
  }

  // Prüfen, ob eine Kategorie geöffnet ist
  public isPanelExpanded(categoryId: number): boolean {
    return this.expandedPanels.has(categoryId);
  }
}
