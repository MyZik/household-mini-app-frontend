import {createAction, props} from '@ngrx/store';
import {getHouseholdItemsSlice} from '../get-household-items.slice';
import {GetHouseholdItemsResponseBody} from '../../api-client/generated';

export const callGetHouseholdItemsSucceededAction = createAction(
  `[${getHouseholdItemsSlice}] call succeeded`,
  props<{
    householdId: number,
    response: GetHouseholdItemsResponseBody
  }>()
);
