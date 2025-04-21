import { createAction, props } from '@ngrx/store';
import { CategoryDetailResponse } from '../../models';
import { getCategoryByIdSlice } from '../get-category-by-id.slice';

export const callGetCategoryByIdSucceededAction = createAction(
  `[${getCategoryByIdSlice}] call succeeded`,
  props<{ response: CategoryDetailResponse }>()
);
