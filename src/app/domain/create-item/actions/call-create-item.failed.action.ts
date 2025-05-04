import { createAction, props } from '@ngrx/store';
import { createItemSlice } from '../create-item.slice';

export const callCreateItemFailedAction = createAction(
    `[${createItemSlice}] call failed`,
    props<{
        error: any;
    }>()
);
