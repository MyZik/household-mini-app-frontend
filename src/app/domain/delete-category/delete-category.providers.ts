import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { deleteCategorySlice } from './delete-category.slice';
import { deleteCategoryReducer } from './reducers/delete-category.reducer';
import { DeleteCategoryEffect } from './effects/delete-category.effect';

export const DELETE_CATEGORY_PROVIDERS = [
    provideState(deleteCategorySlice, deleteCategoryReducer),
    provideEffects([DeleteCategoryEffect]),
];
