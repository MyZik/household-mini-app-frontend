import { createAction, props } from '@ngrx/store';
import { updateCategoryDataSlice } from '../update-category-data.slice';

export const callUpdateCategoryDataFailedAction = createAction(
    `[${updateCategoryDataSlice}] call failed`,
    props<{
        categoryId: number;
        error: any;
    }>()
);
