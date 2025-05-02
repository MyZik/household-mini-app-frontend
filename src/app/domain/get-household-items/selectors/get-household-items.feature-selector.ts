import { createFeatureSelector } from '@ngrx/store';
import { GetHouseholdItemsState } from '../models/get-household-items.state';
import { getHouseholdItemsSlice } from '../get-household-items.slice';

export const getHouseholdItemsFeatureSelector =
    createFeatureSelector<GetHouseholdItemsState>(getHouseholdItemsSlice);
