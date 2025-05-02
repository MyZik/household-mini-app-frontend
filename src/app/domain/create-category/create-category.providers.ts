import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { createCategorySlice } from './create-category.slice';
import { createCategoryReducer } from './reducers/create-category.reducer';
import { CreateCategoryEffect } from './effects/create-category.effect';

export const CREATE_CATEGORY_PROVIDERS = [
    provideState(createCategorySlice, createCategoryReducer),
    provideEffects([CreateCategoryEffect]),
];
