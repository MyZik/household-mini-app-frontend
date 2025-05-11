import { createAction, props } from '@ngrx/store';
import { updateCategoryVisibilitySlice } from '../update-category-visibility.slice';
import { UpdateCategoryVisibility200Response } from '../../api-client';

export const callUpdateCategoryVisibilitySucceededAction = createAction(
    `[${updateCategoryVisibilitySlice}] call succeeded`,
    props<{
        categoryId: number;
        response: UpdateCategoryVisibility200Response;
    }>()
);
