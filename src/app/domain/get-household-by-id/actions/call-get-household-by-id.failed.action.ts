import { createAction, props } from '@ngrx/store';
import { getHouseholdByIdSlice } from '../get-household-by-id.slice';

export const callGetHouseholdByIdFailedAction = createAction(
  `[${getHouseholdByIdSlice}] call failed`,
  props<{
    id: number,
    error: any
  }>()
); 