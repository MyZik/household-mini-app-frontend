import { createAction, props } from '@ngrx/store';
import { deleteCategorySlice } from '../delete-category.slice';

export const callDeleteCategorySucceededAction = createAction(
    `[${deleteCategorySlice}] call succeeded`,
    props<{
        categoryId: number;
    }>()
);
