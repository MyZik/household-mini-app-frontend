import { createReducer, on } from '@ngrx/store';
import { callDeleteCategoryRequestedAction } from '../actions/call-delete-category.requested.action';
import { callDeleteCategorySucceededAction } from '../actions/call-delete-category.succeeded.action';
import { callDeleteCategoryFailedAction } from '../actions/call-delete-category.failed.action';
import { DeleteCategoryState } from '../models/delete-category.state';

export const deleteCategoryReducer = createReducer<DeleteCategoryState>(
    'not-loaded',
    on(callDeleteCategoryRequestedAction, () => 'loading'),
    on(callDeleteCategorySucceededAction, () => 'succeeded'),
    on(callDeleteCategoryFailedAction, () => 'load-failed')
);
