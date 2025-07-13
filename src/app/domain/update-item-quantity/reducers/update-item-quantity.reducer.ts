import { createReducer, on } from '@ngrx/store';
import { callUpdateItemQuantityRequestedAction } from '../actions/call-update-item-quantity.requested.action';
import { callUpdateItemQuantitySucceededAction } from '../actions/call-update-item-quantity.succeeded.action';
import { callUpdateItemQuantityFailedAction } from '../actions/call-update-item-quantity.failed.action';
import { UpdateItemQuantityState, initialUpdateItemQuantityState } from '../models/update-item-quantity.state';

export const updateItemQuantityReducer = createReducer<UpdateItemQuantityState>(
    initialUpdateItemQuantityState,
    on(callUpdateItemQuantityRequestedAction, (state, action) => ({
        ...state,
        [action.itemId]: 'loading',
    })),
    on(callUpdateItemQuantitySucceededAction, (state, action) => ({
        ...state,
        [action.itemId]: 'not-loaded',
    })),
    on(callUpdateItemQuantityFailedAction, (state, action) => ({
        ...state,
        [action.itemId]: 'loaded-failed',
    }))
); 