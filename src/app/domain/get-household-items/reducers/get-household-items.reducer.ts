import { createReducer, on } from '@ngrx/store';
import { callGetHouseholdItemsRequestedAction } from '../actions/call-get-household-items.requested.action';
import { callGetHouseholdItemsSucceededAction } from '../actions/call-get-household-items.succeeded.action';
import { callGetHouseholdItemsFailedAction } from '../actions/call-get-household-items.failed.action';
import { GetHouseholdItemsState } from '../models/get-household-items.state';

export const getHouseholdItemsReducer = createReducer<GetHouseholdItemsState>(
  'not-loaded',
  on(callGetHouseholdItemsRequestedAction, () => 'loading'),
  on(callGetHouseholdItemsSucceededAction, (_state, action) => action.response),
  on(callGetHouseholdItemsFailedAction, () => 'load-failed')
); 