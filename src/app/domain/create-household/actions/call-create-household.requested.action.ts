import { createAction, props } from '@ngrx/store';
import { createHouseholdSlice } from '../create-household.slice';
import { CreateHouseholdRequest } from '../../api-client/generated';

export const callCreateHouseholdRequestedAction = createAction(
    `[${createHouseholdSlice}] call requested`,
    props<CreateHouseholdRequest>()
);
