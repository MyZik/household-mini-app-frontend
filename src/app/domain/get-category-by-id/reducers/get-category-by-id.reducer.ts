import { createReducer, on } from '@ngrx/store';
import { callGetCategoryByIdRequestedAction } from '../actions/call-get-category-by-id.requested.action';
import { callGetCategoryByIdSucceededAction } from '../actions/call-get-category-by-id.succeeded.action';
import { callGetCategoryByIdFailedAction } from '../actions/call-get-category-by-id.failed.action';
import { GetCategoryByIdState } from "../models/get-category-by-id.state";

export const getCategoryByIdReducer = createReducer<GetCategoryByIdState>(
  'not-loaded',
  on(callGetCategoryByIdRequestedAction, () => 'loading'),
  on(callGetCategoryByIdSucceededAction, (_state, action) => ({
    ...action.response,
  })),
  on(callGetCategoryByIdFailedAction, () => 'load-failed')
);
