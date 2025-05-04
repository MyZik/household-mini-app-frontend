import { createAction, props } from '@ngrx/store';
import { createItemSlice } from '../create-item.slice';
import { CreateItemRequest } from '../../api-client/generated';

export const callCreateItemRequestedAction = createAction(
    `[${createItemSlice}] call requested`,
    props<CreateItemRequest>()
);
