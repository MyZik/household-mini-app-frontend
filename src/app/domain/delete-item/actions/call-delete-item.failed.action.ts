import { createAction, props } from '@ngrx/store';
import { deleteItemSlice } from '../delete-item.slice';

export const callDeleteItemFailedAction = createAction(
    `[${deleteItemSlice}] call failed`,
    props<{
        itemId: number;
        error: any;
    }>()
);
