import { createAction, props } from '@ngrx/store';
import { itemsSlice } from '../items.slice';

export const createItemFormSubmittedAction = createAction(
    `[${itemsSlice}] create item form submitted`,
    props<{
        categoryId: number;
        name: string;
        emoji: string;
        quantityType: string;
    }>()
);
