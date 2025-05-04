import { createAction, props } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const categoryCollapsedAction = createAction(
    `[${itemsSlice}] category collapsed`,
    props<{
        categoryId: number;
    }>()
);
