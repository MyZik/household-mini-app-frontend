import { createAction } from '@ngrx/store';
import { getCategoriesSlice } from '../get-categories.slice';

export const callGetCategoriesRequestedAction = createAction(
  `[${getCategoriesSlice}] call requested`
);
