import {createFeatureSelector} from '@ngrx/store';
import {GetHouseholdCategoriesState} from '../models/get-household-categories.state';
import {getHouseholdCategoriesSlice} from "../get-household-categories.slice";

export const getHouseholdCategoriesFeatureSelector = createFeatureSelector<    GetHouseholdCategoriesState>(getHouseholdCategoriesSlice);
