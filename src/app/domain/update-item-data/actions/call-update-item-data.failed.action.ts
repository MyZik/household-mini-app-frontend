import { createAction, props } from '@ngrx/store';
import { updateItemDataSlice } from '../update-item-data.slice';

export const callUpdateItemDataFailedAction = createAction(
    `[${updateItemDataSlice}] call failed`,
    props<{
        itemId: number;
        error: any;
    }>()
); 