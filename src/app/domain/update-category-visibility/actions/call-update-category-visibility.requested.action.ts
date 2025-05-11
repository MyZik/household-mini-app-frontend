import { createAction, props } from '@ngrx/store';
import { updateCategoryVisibilitySlice } from '../update-category-visibility.slice';

export const callUpdateCategoryVisibilityRequestedAction = createAction(
    `[${updateCategoryVisibilitySlice}] call requested`,
    props<{
        categoryId: number;
        isVisible: boolean;
    }>()
);
