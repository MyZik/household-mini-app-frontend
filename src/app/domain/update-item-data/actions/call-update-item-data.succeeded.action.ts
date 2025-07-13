import { createAction, props } from '@ngrx/store';
import { updateItemDataSlice } from '../update-item-data.slice';

export const callUpdateItemDataSucceededAction = createAction(
    `[${updateItemDataSlice}] call succeeded`,
    props<{
        itemId: number;
        name: string;
        emoji: string;
        quantity: number;
        quantityType: string;
    }>()
); 