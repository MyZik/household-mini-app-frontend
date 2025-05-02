import { createAction, props } from '@ngrx/store';
import { getUserByTelegramIdSlice } from '../get-user-by-telegram-id.slice';

export const callGetUserByTelegramIdFailedAction = createAction(
    `[${getUserByTelegramIdSlice}] call failed`,
    props<{
        telegramUserId: number;
        errorCode: number;
        error: any;
    }>()
);
