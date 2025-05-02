import { createAction, props } from '@ngrx/store';
import { createHouseholdSlice } from '../create-household.slice';

export const callCreateHouseholdFailedAction = createAction(
    `[${createHouseholdSlice}] call failed`,
    props<{
        error: any;
    }>()
);
