import { createAction, props } from '@ngrx/store';
import { householdsSlice } from '../households.slice';

export const loadHouseholdDataRequestedAction = createAction(
    `[${householdsSlice}] load household data requested`,
    props<{
        userId: number;
        householdId: number;
    }>()
);
