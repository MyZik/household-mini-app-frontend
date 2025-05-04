import { createReducer, on } from '@ngrx/store';
import { callCreateItemRequestedAction } from '../actions/call-create-item.requested.action';
import { callCreateItemSucceededAction } from '../actions/call-create-item.succeeded.action';
import { callCreateItemFailedAction } from '../actions/call-create-item.failed.action';
import { CreateItemState } from '../models/create-item.state';

export const createItemReducer = createReducer<CreateItemState>(
    'not-submitted',
    on(callCreateItemRequestedAction, () => 'submitting'),
    on(callCreateItemSucceededAction, (_state, action) => action.response),
    on(callCreateItemFailedAction, () => 'submit-failed')
);
