import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { createCategorySlice } from '../create-category/create-category.slice';
import { createCategoryReducer } from '../create-category/reducers/create-category.reducer';
import { CreateCategoryEffect } from '../create-category/effects/create-category.effect';

export const CREATE_HOUSEHOLD_PROVIDERS = [
    provideState(createCategorySlice, createCategoryReducer),
    provideEffects([CreateCategoryEffect]),
];
