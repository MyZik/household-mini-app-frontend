import { createAction, props } from '@ngrx/store';
import { createCategorySlice } from '../create-category.slice';

export const callCreateCategoryFailedAction = createAction(
    `[${createCategorySlice}] call failed`,
    props<{
        error: any;
    }>()
);
