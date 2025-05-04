import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { getItemsByCategorySlice } from './get-items-by-category.slice';
import { getItemsByCategoryReducer } from './reducers/get-items-by-category.reducer';
import { GetItemsByCategoryEffect } from './effects/get-items-by-category.effect';

export const GET_ITEMS_BY_CATEGORY_PROVIDERS = [
    provideState(getItemsByCategorySlice, getItemsByCategoryReducer),
    provideEffects([GetItemsByCategoryEffect]),
];
