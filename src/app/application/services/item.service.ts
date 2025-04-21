import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  callGetItemsByCategoryRequestedAction,
  selectItemsSelector,
  selectItemsLoadingSelector
} from '../../domain/get-items-by-category';
import {
  updateItemAvailabilityRequestedAction,
  selectUpdateItemAvailabilityLoadingSelector,
  selectUpdateItemAvailabilityErrorSelector
} from '../../domain/update-item-availability';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public readonly items = this.store.selectSignal(selectItemsSelector);
  public readonly itemsLoading = this.store.selectSignal(selectItemsLoadingSelector);

  public readonly updateLoading = this.store.selectSignal(selectUpdateItemAvailabilityLoadingSelector);
  public readonly updateError = this.store.selectSignal(selectUpdateItemAvailabilityErrorSelector);

  constructor(
    private readonly store: Store
  ) {}

  public loadItemsByCategoryId(categoryId: number): void {
    this.store.dispatch(callGetItemsByCategoryRequestedAction({
      categoryId: categoryId
    }));
  }

  public updateItemAvailability(itemId: number, isAvailable: boolean): void {
    this.store.dispatch(updateItemAvailabilityRequestedAction({
      itemId: itemId,
      isAvailable: isAvailable
    }));
  }
}
