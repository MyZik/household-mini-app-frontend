import { createAction, props } from '@ngrx/store';
import { CategoryResponse } from '../../models';
import { getCategoriesSlice } from '../get-categories.slice';

export const callGetCategoriesSucceededAction = createAction(
  `[${getCategoriesSlice}] call succeeded`,
  props<{ response: CategoryResponse[] }>()
);
