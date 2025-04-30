import {createAction, props} from '@ngrx/store';
import { getHouseholdCategoriesSlice } from '../get-household-categories.slice';

export const callGetHouseholdCategoriesRequestedAction = createAction(
  `[${getHouseholdCategoriesSlice}] call requested`,
  props<{
    householdId: number
  }>()
);
