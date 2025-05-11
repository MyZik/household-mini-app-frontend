import { createAction, props } from '@ngrx/store';
import { updateCategoryVisibilitySlice } from '../update-category-visibility.slice';

export const callUpdateCategoryVisibilityFailedAction = createAction(
    `[${updateCategoryVisibilitySlice}] call failed`,
    props<{
        categoryId: number;
        error: any;
    }>()
);
