import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  callGetCategoriesRequestedAction,
} from '../../domain/get-categories';
import {
  callGetCategoryByIdRequestedAction,
} from '../../domain/get-category-by-id';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly store: Store) {}

  public loadAllCategories(): void {
    this.store.dispatch(callGetCategoriesRequestedAction());
  }

  public loadCategoryById(id: number): void {
    this.store.dispatch(callGetCategoryByIdRequestedAction({
      id: id
    }));
  }
}
