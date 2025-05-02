import { createAction, props } from '@ngrx/store';
import { householdsLayerSlice } from '../households-layer.slice';

export const loadHouseholdDataRequestedAction = createAction(
    `[${householdsLayerSlice}] load household data requested`,
    props<{
        userId: number;
        householdId: number;
    }>()
);
