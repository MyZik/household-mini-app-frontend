import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { categoriesSlice } from './categories.slice';
import { categoriesReducer } from './reducers/categories.reducer';
import { CreateCategoryRequestedEffect } from './effect/create-category-requested.effect';
import { UpdateCategoriesListOnDispatchedActionsEffect } from './effect/update-categories-list-on-dispatched-actions.effect';

export const CATEGORIES_PROVIDER = [
    provideState(categoriesSlice, categoriesReducer),

    provideEffects([CreateCategoryRequestedEffect, UpdateCategoriesListOnDispatchedActionsEffect]),
];
