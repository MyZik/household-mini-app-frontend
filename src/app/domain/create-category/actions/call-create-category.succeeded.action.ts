import { createAction, props } from '@ngrx/store';
import { createCategorySlice } from '../create-category.slice';
import { CreateCategory201Response } from '../../api-client/generated';

export const callCreateCategorySucceededAction = createAction(
    `[${createCategorySlice}] call succeeded`,
    props<{
        response: CreateCategory201Response;
    }>()
);
