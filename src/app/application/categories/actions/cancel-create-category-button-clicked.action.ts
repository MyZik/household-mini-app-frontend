import { createAction, props } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const cancelCreateCategoryButtonClickedAction = createAction(
    `[${categoriesSlice}] cancel create category button clicked`
);
