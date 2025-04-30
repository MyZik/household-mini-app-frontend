import { createAction, props } from '@ngrx/store';
import { createCategorySlice } from '../create-category.slice';
import { CreateCategoryResponse } from '../../api-client/generated';

export const callCreateCategorySucceededAction = createAction(
  `[${createCategorySlice}] call succeeded`,
  props<{
    response: CreateCategoryResponse
  }>()
); 