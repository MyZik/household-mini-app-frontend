import {createAction, props} from '@ngrx/store';
import {getHouseholdCategoriesSlice} from '../get-household-categories.slice';

export const callGetHouseholdCategoriesFailedAction = createAction(
  `[${getHouseholdCategoriesSlice}] call failed`,
  props<{
    householdId: number,
    error: any
  }>()
);
