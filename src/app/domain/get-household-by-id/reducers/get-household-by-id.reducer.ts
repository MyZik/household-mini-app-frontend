import { createReducer, on } from '@ngrx/store';
import { callGetHouseholdByIdRequestedAction } from '../actions/call-get-household-by-id.requested.action';
import { callGetHouseholdByIdSucceededAction } from '../actions/call-get-household-by-id.succeeded.action';
import { callGetHouseholdByIdFailedAction } from '../actions/call-get-household-by-id.failed.action';
import { GetHouseholdByIdState } from '../models/get-household-by-id.state';

export const getHouseholdByIdReducer = createReducer<GetHouseholdByIdState>(
  'not-loaded',
  on(callGetHouseholdByIdRequestedAction, () => 'loading'),
  on(callGetHouseholdByIdSucceededAction, (_state, action) => action.response),
  on(callGetHouseholdByIdFailedAction, () => 'load-failed')
); 