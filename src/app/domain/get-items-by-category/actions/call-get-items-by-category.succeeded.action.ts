import { createAction, props } from '@ngrx/store';
import { ItemResponse } from '../../models';
import {getItemsByCategorySlice} from "../get-items-by-category.slice";

export const callGetItemsByCategorySucceededAction = createAction(
  `[${getItemsByCategorySlice}] call succeeded`,
  props<{ response: ItemResponse[] }>()
);
