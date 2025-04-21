import { createAction, props } from '@ngrx/store';
import { getCategoriesSlice } from '../get-categories.slice';

export const callGetCategoriesFailedAction = createAction(
  `[${getCategoriesSlice}] call failed`,
  props<{ error: any }>()
);
