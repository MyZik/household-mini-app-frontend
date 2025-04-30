import { createReducer, on } from '@ngrx/store';
import { callCreateCategoryRequestedAction } from '../actions/call-create-category.requested.action';
import { callCreateCategorySucceededAction } from '../actions/call-create-category.succeeded.action';
import { callCreateCategoryFailedAction } from '../actions/call-create-category.failed.action';
import { CreateCategoryState } from '../models/create-category.state';

export const createCategoryReducer = createReducer<CreateCategoryState>(
  'not-submitted',
  on(callCreateCategoryRequestedAction, () => 'submitting'),
  on(callCreateCategorySucceededAction, (_state, action) => action.response),
  on(callCreateCategoryFailedAction, () => 'submit-failed')
); 