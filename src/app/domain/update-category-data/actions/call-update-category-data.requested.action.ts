import { createAction, props } from '@ngrx/store';
import { updateCategoryDataSlice } from '../update-category-data.slice';

export const callUpdateCategoryDataRequestedAction = createAction(
    `[${updateCategoryDataSlice}] call requested`,
    props<{
        categoryId: number;
        name: string;
        emoji: string;
    }>()
);
