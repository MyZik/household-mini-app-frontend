import { createReducer, on } from '@ngrx/store';
import { callGetItemsByCategoryRequestedAction } from '../actions/call-get-items-by-category.requested.action';
import { callGetItemsByCategorySucceededAction } from '../actions/call-get-items-by-category.succeeded.action';
import { callGetItemsByCategoryFailedAction } from '../actions/call-get-items-by-category.failed.action';
import { GetItemsByCategoryState } from '../models/get-items-by-category.state';

export const getItemsByCategoryReducer = createReducer<GetItemsByCategoryState>(
    {},
    on(callGetItemsByCategoryRequestedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'loading',
    })),
    on(callGetItemsByCategorySucceededAction, (state, action) => ({
        ...state,
        [action.categoryId]: action.response,
    })),
    on(callGetItemsByCategoryFailedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'load-failed',
    }))
);
