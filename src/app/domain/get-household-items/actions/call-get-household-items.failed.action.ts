import { createAction, props } from '@ngrx/store';
import { getHouseholdItemsSlice } from '../get-household-items.slice';

export const callGetHouseholdItemsFailedAction = createAction(
  `[${getHouseholdItemsSlice}] call failed`,
  props<{
    householdId: number,
    error: any
  }>()
); 