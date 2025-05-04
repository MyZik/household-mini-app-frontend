import { createAction, props } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const cancelCreateItemButtonClickedAction = createAction(
    `[${itemsSlice}] cancel create item button clicked`,
    props<{
        categoryId: number;
    }>()
);
