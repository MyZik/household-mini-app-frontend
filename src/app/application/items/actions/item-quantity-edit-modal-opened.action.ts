import { createAction, props } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const itemQuantityEditModalOpenedAction = createAction(
    `[${itemsSlice}] item quantity edit modal opened`,
    props<{
        itemId: number;
        itemName: string;
        quantity: number;
        quantityType: string;
    }>()
); 