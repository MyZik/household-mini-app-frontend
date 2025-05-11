import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { updateCategoryDataSlice } from './update-category-data.slice';
import { updateCategoryDataReducer } from './reducers/update-category-data.reducer';
import { UpdateCategoryDataEffect } from './effects/update-category-data.effect';

export const UPDATE_CATEGORY_DATA_PROVIDERS = [
    provideState(updateCategoryDataSlice, updateCategoryDataReducer),
    provideEffects([UpdateCategoryDataEffect]),
];
