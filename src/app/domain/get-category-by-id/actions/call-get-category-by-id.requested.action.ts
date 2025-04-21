import { createAction, props } from '@ngrx/store';
import { getCategoryByIdSlice } from '../get-category-by-id.slice';

export const callGetCategoryByIdRequestedAction = createAction(
  `[${getCategoryByIdSlice}] call requested`,
  props<{ id: number }>()
);
