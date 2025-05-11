import { createAction } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const toggleShowHiddenCategoriesAction = createAction(
    `[${categoriesSlice}] toggle show hidden categories`
);
