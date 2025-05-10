import { createAction, props } from '@ngrx/store';
import { deleteCategorySlice } from '../delete-category.slice';

export const callDeleteCategoryFailedAction = createAction(
    `[${deleteCategorySlice}] call failed`,
    props<{
        categoryId: number;
        error: any;
    }>()
);
