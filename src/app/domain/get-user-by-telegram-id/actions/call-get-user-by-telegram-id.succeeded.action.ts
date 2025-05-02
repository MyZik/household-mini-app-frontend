import { createAction, props } from '@ngrx/store';
import { getUserByTelegramIdSlice } from '../get-user-by-telegram-id.slice';
import { GetUserByTelegramIdResponseBody } from '../../api-client';

export const callGetUserByTelegramIdSucceededAction = createAction(
    `[${getUserByTelegramIdSlice}] call succeeded`,
    props<{
        telegramUserId: number;
        response: GetUserByTelegramIdResponseBody;
    }>()
);
