import { createAction, props } from '@ngrx/store';
import { createHouseholdSlice } from '../create-household.slice';
import { CreateHouseholdResponse } from '../../api-client/generated';

export const callCreateHouseholdSucceededAction = createAction(
    `[${createHouseholdSlice}] call succeeded`,
    props<{
        response: CreateHouseholdResponse;
    }>()
);
