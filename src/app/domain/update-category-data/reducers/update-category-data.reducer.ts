import { createReducer, on } from '@ngrx/store';
import { callUpdateCategoryDataRequestedAction } from '../actions/call-update-category-data.requested.action';
import { callUpdateCategoryDataSucceededAction } from '../actions/call-update-category-data.succeeded.action';
import { callUpdateCategoryDataFailedAction } from '../actions/call-update-category-data.failed.action';
import {
    UpdateCategoryDataState,
    initialUpdateCategoryDataState,
} from '../models/update-category-data.state';

export const updateCategoryDataReducer = createReducer<UpdateCategoryDataState>(
    {},
    on(callUpdateCategoryDataRequestedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'submitting',
    })),
    on(callUpdateCategoryDataSucceededAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'submit-succeeded',
    })),
    on(callUpdateCategoryDataFailedAction, (state, action) => ({
        ...state,
        [action.categoryId]: 'submit-failed',
    }))
);
