import {createReducer, on} from '@ngrx/store';
import {callGetHouseholdCategoriesRequestedAction} from '../actions/call-get-household-categories.requested.action';
import {callGetHouseholdCategoriesSucceededAction} from '../actions/call-get-household-categories.succeeded.action';
import {callGetHouseholdCategoriesFailedAction} from '../actions/call-get-household-categories.failed.action';
import {GetHouseholdCategoriesState} from "../models/get-household-categories.state";

export const getHouseholdCategoriesReducer = createReducer<GetHouseholdCategoriesState>(
  'not-loaded',
  on(callGetHouseholdCategoriesRequestedAction, () => 'loading'),
  on(callGetHouseholdCategoriesSucceededAction, (_state, action) => ({
    ...action.response,
  })),
  on(callGetHouseholdCategoriesFailedAction, () => 'load-failed')
);
