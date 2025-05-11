import { createReducer, on } from '@ngrx/store';
import { callUpdateCategoryVisibilityRequestedAction } from '../actions/call-update-category-visibility.requested.action';
import { callUpdateCategoryVisibilitySucceededAction } from '../actions/call-update-category-visibility.succeeded.action';
import { callUpdateCategoryVisibilityFailedAction } from '../actions/call-update-category-visibility.failed.action';
import {
    initialUpdateCategoryVisibilityState,
    UpdateCategoryVisibilityState,
} from '../models/update-category-visibility.state';

export const updateCategoryVisibilityReducer = createReducer<UpdateCategoryVisibilityState>(
    initialUpdateCategoryVisibilityState,
    on(callUpdateCategoryVisibilityRequestedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'loading',
    })),
    on(callUpdateCategoryVisibilitySucceededAction, (state, action) => ({
        ...state,
        [action.categoryId]: action.response,
    })),
    on(callUpdateCategoryVisibilityFailedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'load-failed',
    }))
);
