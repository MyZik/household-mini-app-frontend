import { createReducer, on } from '@ngrx/store';
import { callCreateHouseholdRequestedAction } from '../actions/call-create-household.requested.action';
import { callCreateHouseholdSucceededAction } from '../actions/call-create-household.succeeded.action';
import { callCreateHouseholdFailedAction } from '../actions/call-create-household.failed.action';
import { CreateHouseholdState } from '../models/create-household.state';

export const createHouseholdReducer = createReducer<CreateHouseholdState>(
    'not-submitted',
    on(callCreateHouseholdRequestedAction, () => 'submitting'),
    on(callCreateHouseholdSucceededAction, (_state, action) => action.response),
    on(callCreateHouseholdFailedAction, () => 'submit-failed')
);
