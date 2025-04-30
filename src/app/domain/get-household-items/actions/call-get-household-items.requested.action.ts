import { createAction, props } from '@ngrx/store';
import { getHouseholdItemsSlice } from '../get-household-items.slice';

export const callGetHouseholdItemsRequestedAction = createAction(
  `[${getHouseholdItemsSlice}] call requested`,
  props<{
    householdId: number
  }>()
); 