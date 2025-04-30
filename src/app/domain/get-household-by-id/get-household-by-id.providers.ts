import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { getHouseholdByIdSlice } from './get-household-by-id.slice';
import { getHouseholdByIdReducer } from './reducers/get-household-by-id.reducer';
import { GetHouseholdByIdEffect } from './effects/get-household-by-id.effect';

export const GET_HOUSEHOLD_BY_ID_PROVIDERS = [
  provideState(getHouseholdByIdSlice, getHouseholdByIdReducer),
  provideEffects([GetHouseholdByIdEffect])
];
