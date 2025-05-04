import { createAction, props } from '@ngrx/store';
import { deleteItemSlice } from '../delete-item.slice';

export const callDeleteItemRequestedAction = createAction(
    `[${deleteItemSlice}] call requested`,
    props<{
        itemId: number;
    }>()
); 