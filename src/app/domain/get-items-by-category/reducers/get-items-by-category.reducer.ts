import {createReducer, on} from '@ngrx/store';
import {callGetItemsByCategoryRequestedAction} from '../actions/call-get-items-by-category.requested.action';
import {callGetItemsByCategorySucceededAction} from '../actions/call-get-items-by-category.succeeded.action';
import {callGetItemsByCategoryFailedAction} from '../actions/call-get-items-by-category.failed.action';
import {GetItemsByCategoryState} from "../models/get-items-by-category.state";

export const getItemsByCategoryReducer = createReducer<GetItemsByCategoryState>(
  'not-loaded',
  on(callGetItemsByCategoryRequestedAction, () => 'loading'),
  on(callGetItemsByCategorySucceededAction, (_state, action) => ({
    ...action.response,
  })),
  on(callGetItemsByCategoryFailedAction, () => 'load-failed')
); 