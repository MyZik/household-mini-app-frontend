import { createAction, props } from '@ngrx/store';
import { getCategoryByIdSlice } from '../get-category-by-id.slice';
import { GetCategoryByIdResponse } from '../../api-client/generated';

export const callGetCategoryByIdSucceededAction = createAction(
  `[${getCategoryByIdSlice}] call succeeded`,
  props<{
    id: number,
    response: GetCategoryByIdResponse
  }>()
); 