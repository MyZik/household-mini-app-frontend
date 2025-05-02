import { createAction, props } from '@ngrx/store';
import { getHouseholdByIdSlice } from '../get-household-by-id.slice';
import { GetHouseholdByIdResponse } from '../../api-client/generated';

export const callGetHouseholdByIdSucceededAction = createAction(
    `[${getHouseholdByIdSlice}] call succeeded`,
    props<{
        id: number;
        response: GetHouseholdByIdResponse;
    }>()
);
