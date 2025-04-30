import { createFeatureSelector } from '@ngrx/store';
import { CreateHouseholdState } from '../models/create-household.state';
import { createHouseholdSlice } from '../create-household.slice';

export const selectCreateHouseholdFeature = createFeatureSelector<CreateHouseholdState>(createHouseholdSlice); 