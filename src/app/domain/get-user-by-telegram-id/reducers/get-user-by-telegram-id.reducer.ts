import { createReducer, on } from '@ngrx/store';
import { callGetUserByTelegramIdRequestedAction } from '../actions/call-get-user-by-telegram-id.requested.action';
import { callGetUserByTelegramIdSucceededAction } from '../actions/call-get-user-by-telegram-id.succeeded.action';
import { callGetUserByTelegramIdFailedAction } from '../actions/call-get-user-by-telegram-id.failed.action';
import { GetUserByTelegramIdState } from '../models/get-user-by-telegram-id.state';

export const getUserByTelegramIdReducer = createReducer<GetUserByTelegramIdState>(
    'not-loaded',
    on(callGetUserByTelegramIdRequestedAction, () => 'loading'),
    on(callGetUserByTelegramIdSucceededAction, (_state, action) => ({
        ...action.response,
    })),
    on(callGetUserByTelegramIdFailedAction, (_state, action) => {
        return action.errorCode === 404 ? null : 'load-failed';
    })
);
