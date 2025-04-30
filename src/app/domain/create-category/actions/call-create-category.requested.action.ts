import { createAction, props } from '@ngrx/store';
import { createCategorySlice } from '../create-category.slice';
import { CreateCategoryRequest } from '../../api-client/generated';

export const callCreateCategoryRequestedAction = createAction(
  `[${createCategorySlice}] call requested`,
  props<CreateCategoryRequest>()
); 