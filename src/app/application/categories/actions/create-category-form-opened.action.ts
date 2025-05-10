import { createAction } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const createCategoryFormOpenedAction = createAction(
    `[${categoriesSlice}] create category form opened`
);
