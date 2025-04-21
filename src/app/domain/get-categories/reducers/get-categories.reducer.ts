import {createReducer, on} from '@ngrx/store';
import {callGetCategoriesRequestedAction} from '../actions/call-get-categories.requested.action';
import {callGetCategoriesSucceededAction} from '../actions/call-get-categories.succeeded.action';
import {callGetCategoriesFailedAction} from '../actions/call-get-categories.failed.action';
import {GetCategoriesState} from "../models/get-categories.state";

export const getCategoriesReducer = createReducer<GetCategoriesState>(
  'not-loaded',
  on(callGetCategoriesRequestedAction, () => 'loading'),
  on(callGetCategoriesSucceededAction, (_state, action) => ({
    ...action.response,
  })),
  on(callGetCategoriesFailedAction, () => 'load-failed')
);
