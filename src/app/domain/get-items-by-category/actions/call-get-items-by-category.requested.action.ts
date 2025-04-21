import { createAction, props } from '@ngrx/store';
import {getItemsByCategorySlice} from "../get-items-by-category.slice";

export const callGetItemsByCategoryRequestedAction = createAction(
  `[${getItemsByCategorySlice}] call requested`,
  props<{ categoryId: number }>()
);
