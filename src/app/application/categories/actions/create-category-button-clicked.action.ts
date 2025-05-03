import { createAction } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const createCategoryButtonClickedAction = createAction(
    `[${categoriesSlice}] create category button clicked`
);
