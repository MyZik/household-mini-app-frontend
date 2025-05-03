import { createAction, props } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const createCategoryFormSubmittedAction = createAction(
    `[${categoriesSlice}] create category form submitted`,
    props<{
        name: string;
        emoji: string;
    }>()
);
