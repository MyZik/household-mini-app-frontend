import { createFeatureSelector } from '@ngrx/store';
import { GetHouseholdByIdState } from '../models/get-household-by-id.state';
import { getHouseholdByIdSlice } from '../get-household-by-id.slice';

export const selectGetHouseholdByIdFeature =
    createFeatureSelector<GetHouseholdByIdState>(getHouseholdByIdSlice);
