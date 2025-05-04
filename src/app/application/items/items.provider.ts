import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { itemsSlice } from './items.slice';
import { itemsReducer } from './reducers/items.reducer';
import { CreateItemRequestedEffect } from './effect/create-item-requested.effect';
import { UpdateSingleCategoryOnCreateItemEffect } from './effect/update-single-category-on-create-item.effect';

export const ITEMS_PROVIDER = [
    provideState(itemsSlice, itemsReducer),
    provideEffects([CreateItemRequestedEffect, UpdateSingleCategoryOnCreateItemEffect]),
];
