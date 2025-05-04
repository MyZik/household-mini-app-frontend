import { createAction, props } from '@ngrx/store';
import { createItemSlice } from '../create-item.slice';
import { CreateItem201Response } from '../../api-client/generated';

export const callCreateItemSucceededAction = createAction(
    `[${createItemSlice}] call succeeded`,
    props<{
        categoryId: number;
        response: CreateItem201Response;
    }>()
);
