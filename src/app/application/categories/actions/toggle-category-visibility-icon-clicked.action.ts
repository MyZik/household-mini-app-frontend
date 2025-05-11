import { createAction, props } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const toggleCategoryVisibilityIconClickedAction = createAction(
    `[${categoriesSlice}] toggle category visibility icon clicked`,
    props<{
        categoryId: number;
        isVisible: boolean;
    }>()
);
