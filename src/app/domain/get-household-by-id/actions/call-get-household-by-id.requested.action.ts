import { createAction, props } from '@ngrx/store';
import { getHouseholdByIdSlice } from '../get-household-by-id.slice';

export const callGetHouseholdByIdRequestedAction = createAction(
    `[${getHouseholdByIdSlice}] call requested`,
    props<{
        id: number;
    }>()
);
