import { createAction, props } from '@ngrx/store';
import { getCategoryByIdSlice } from '../get-category-by-id.slice';

export const callGetCategoryByIdFailedAction = createAction(
  `[${getCategoryByIdSlice}] call failed`,
  props<{
    id: number,
    error: any
  }>()
); 