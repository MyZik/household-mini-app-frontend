import { createAction, props } from '@ngrx/store';
import { updateItemQuantitySlice } from '../update-item-quantity.slice';

export const callUpdateItemQuantitySucceededAction = createAction(
    `[${updateItemQuantitySlice}] call succeeded`,
    props<{
        itemId: number;
        quantity: number;
        quantityType: string;
    }>()
); 