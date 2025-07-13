import { createAction, props } from '@ngrx/store';
import { updateItemQuantitySlice } from '../update-item-quantity.slice';

export const callUpdateItemQuantityRequestedAction = createAction(
    `[${updateItemQuantitySlice}] call requested`,
    props<{
        itemId: number;
        quantity: number;
        quantityType: string;
    }>()
); 