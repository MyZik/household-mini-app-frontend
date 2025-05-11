import { createAction, props } from '@ngrx/store';
import { updateCategoryDataSlice } from '../update-category-data.slice';

export const callUpdateCategoryDataSucceededAction = createAction(
    `[${updateCategoryDataSlice}] call succeeded`,
    props<{
        categoryId: number;
        name: string;
        emoji: string;
    }>()
);
