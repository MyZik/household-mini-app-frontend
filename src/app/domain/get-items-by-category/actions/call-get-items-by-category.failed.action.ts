import { createAction, props } from '@ngrx/store';
import { getItemsByCategorySlice } from '../get-items-by-category.slice';

export const callGetItemsByCategoryFailedAction = createAction(
  `[${getItemsByCategorySlice}] call failed`,
  props<{ error: any }>()
);
