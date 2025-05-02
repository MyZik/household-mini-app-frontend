import { createAction, props } from '@ngrx/store';
import { createUserFromTelegramSlice } from '../create-user-from-telegram.slice';
import { CreateUserFromTelegramResponseBody } from '../../api-client/generated';

export const callCreateUserFromTelegramSucceededAction = createAction(
    `[${createUserFromTelegramSlice}] call succeeded`,
    props<{
        telegramUserId: number;
        response: CreateUserFromTelegramResponseBody;
    }>()
);
