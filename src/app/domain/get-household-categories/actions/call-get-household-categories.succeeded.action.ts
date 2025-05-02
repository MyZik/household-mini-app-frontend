import { createAction, props } from '@ngrx/store';
import { getHouseholdCategoriesSlice } from '../get-household-categories.slice';
import { GetHouseholdCategoriesResponseBody } from '../../api-client';

export const callGetHouseholdCategoriesSucceededAction = createAction(
    `[${getHouseholdCategoriesSlice}] call succeeded`,
    props<{
        householdId: number;
        response: GetHouseholdCategoriesResponseBody;
    }>()
);
