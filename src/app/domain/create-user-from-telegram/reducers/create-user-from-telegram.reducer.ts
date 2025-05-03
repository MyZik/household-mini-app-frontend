import { createReducer, on } from '@ngrx/store';
import { callCreateUserFromTelegramRequestedAction } from '../actions/call-create-user-from-telegram.requested.action';
import { callCreateUserFromTelegramSucceededAction } from '../actions/call-create-user-from-telegram.succeeded.action';
import { callCreateUserFromTelegramFailedAction } from '../actions/call-create-user-from-telegram.failed.action';
import { CreateUserFromTelegramState } from '../models/create-user-from-telegram.state';

export const createUserFromTelegramReducer = createReducer<CreateUserFromTelegramState>(
    'not-submitted',
    on(callCreateUserFromTelegramRequestedAction, () => 'submitting'),
    on(callCreateUserFromTelegramSucceededAction, (_state, action) => action.response),
    on(callCreateUserFromTelegramFailedAction, () => 'submit-failed')
);
