import { createAction, props } from '@ngrx/store';
import { getItemsByCategorySlice } from '../get-items-by-category.slice';
import { GetItemsByCategory200Response } from '../../api-client';

export const callGetItemsByCategorySucceededAction = createAction(
    `[${getItemsByCategorySlice}] call succeeded`,
    props<{
        categoryId: number;
        response: GetItemsByCategory200Response;
    }>()
);
