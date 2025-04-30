import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { getHouseholdItemsSlice } from './get-household-items.slice';
import { getHouseholdItemsReducer } from './reducers/get-household-items.reducer';
import { GetHouseholdItemsEffect } from './effects/get-household-items.effect';

export const GET_HOUSEHOLD_ITEMS_PROVIDERS = [
  provideState(getHouseholdItemsSlice, getHouseholdItemsReducer),
  provideEffects([GetHouseholdItemsEffect])
];
