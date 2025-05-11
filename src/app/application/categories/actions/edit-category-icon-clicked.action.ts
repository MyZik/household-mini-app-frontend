import { createAction, props } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const editCategoryIconClickedAction = createAction(
    `[${categoriesSlice}] edit category icon clicked`,
    props<{
        categoryId: number;
        name: string;
        emoji: string;
    }>()
);
