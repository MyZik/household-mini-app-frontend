import { createReducer, on } from '@ngrx/store';
import { callUpdateItemDataRequestedAction } from '../actions/call-update-item-data.requested.action';
import { callUpdateItemDataSucceededAction } from '../actions/call-update-item-data.succeeded.action';
import { callUpdateItemDataFailedAction } from '../actions/call-update-item-data.failed.action';
import { UpdateItemDataState, initialUpdateItemDataState } from '../models/update-item-data.state';

export const updateItemDataReducer = createReducer<UpdateItemDataState>(
    initialUpdateItemDataState,
    on(callUpdateItemDataRequestedAction, (state, action) => ({
        ...state,
        [action.itemId]: 'loading',
    })),
    on(callUpdateItemDataSucceededAction, (state, action) => ({
        ...state,
        [action.itemId]: 'success',
    })),
    on(callUpdateItemDataFailedAction, (state, action) => ({
        ...state,
        [action.itemId]: 'load-failed',
    }))
); 