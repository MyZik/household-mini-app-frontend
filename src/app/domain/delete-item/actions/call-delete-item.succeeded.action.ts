import { createAction, props } from '@ngrx/store';
import { deleteItemSlice } from '../delete-item.slice';

export const callDeleteItemSucceededAction = createAction(
    `[${deleteItemSlice}] call succeeded`,
    props<{
        itemId: number;
    }>()
); 