import { createAction, props } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const createItemButtonClickedAction = createAction(
    `[${itemsSlice}] create item button clicked`,
    props<{
        categoryId: number;
    }>()
);
