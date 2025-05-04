import { createReducer, on } from '@ngrx/store';
import { callDeleteItemRequestedAction } from '../actions/call-delete-item.requested.action';
import { callDeleteItemSucceededAction } from '../actions/call-delete-item.succeeded.action';
import { callDeleteItemFailedAction } from '../actions/call-delete-item.failed.action';
import { DeleteItemState } from '../models/delete-item.state';

export const deleteItemReducer = createReducer<DeleteItemState>(
    'not-loaded',
    on(callDeleteItemRequestedAction, () => 'loading'),
    on(callDeleteItemSucceededAction, () => 'succeeded'),
    on(callDeleteItemFailedAction, () => 'load-failed')
); 