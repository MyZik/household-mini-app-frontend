import { createAction, props } from '@ngrx/store';
import { getUserByTelegramIdSlice } from '../get-user-by-telegram-id.slice';

export const callGetUserByTelegramIdRequestedAction = createAction(
    `[${getUserByTelegramIdSlice}] call requested`,
    props<{
        telegramUserId: number;
    }>()
);
