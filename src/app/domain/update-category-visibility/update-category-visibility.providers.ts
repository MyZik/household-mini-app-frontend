import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { updateCategoryVisibilitySlice } from './update-category-visibility.slice';
import { updateCategoryVisibilityReducer } from './reducers/update-category-visibility.reducer';
import { UpdateCategoryVisibilityEffect } from './effects/update-category-visibility.effect';

export const UPDATE_CATEGORY_VISIBILITY_PROVIDERS = [
    provideState(updateCategoryVisibilitySlice, updateCategoryVisibilityReducer),
    provideEffects([UpdateCategoryVisibilityEffect]),
];
