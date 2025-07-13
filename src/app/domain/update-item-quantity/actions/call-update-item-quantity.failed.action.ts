import { createAction, props } from '@ngrx/store';
import { updateItemQuantitySlice } from '../update-item-quantity.slice';

export const callUpdateItemQuantityFailedAction = createAction(
    `[${updateItemQuantitySlice}] call failed`,
    props<{
        itemId: number;
        error: any;
    }>()
); 