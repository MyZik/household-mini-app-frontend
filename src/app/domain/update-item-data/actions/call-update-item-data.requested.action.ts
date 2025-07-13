import { createAction, props } from '@ngrx/store';
import { updateItemDataSlice } from '../update-item-data.slice';

export const callUpdateItemDataRequestedAction = createAction(
    `[${updateItemDataSlice}] call requested`,
    props<{
        itemId: number;
        name: string;
        emoji: string;
        quantity: number;
        quantityType: string;
    }>()
); 