import { createAction } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const itemQuantityEditModalClosedAction = createAction(
    `[${itemsSlice}] item quantity edit modal closed`
); 