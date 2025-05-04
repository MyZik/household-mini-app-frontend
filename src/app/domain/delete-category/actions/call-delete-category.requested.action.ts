import { createAction, props } from '@ngrx/store';
import { deleteCategorySlice } from '../delete-category.slice';

export const callDeleteCategoryRequestedAction = createAction(
    `[${deleteCategorySlice}] call requested`,
    props<{
        categoryId: number;
    }>()
); 