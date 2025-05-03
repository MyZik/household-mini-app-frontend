import { createAction, props } from '@ngrx/store';
import { createUserFromTelegramSlice } from '../create-user-from-telegram.slice';
import { CreateUserFromTelegramRequest } from '../../api-client/generated';

export const callCreateUserFromTelegramRequestedAction = createAction(
    `[${createUserFromTelegramSlice}] call requested`,
    props<CreateUserFromTelegramRequest>()
);
