import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { getHouseholdCategoriesSlice } from './get-household-categories.slice';
import { getHouseholdCategoriesReducer } from './reducers/get-household-categories.reducer';
import { GetHouseholdCategoriesEffect } from './effects/get-household-categories.effect';

export const GET_HOUSEHOLD_CATEGORIES_PROVIDERS = [
    provideState(getHouseholdCategoriesSlice, getHouseholdCategoriesReducer),
    provideEffects([GetHouseholdCategoriesEffect]),
];
