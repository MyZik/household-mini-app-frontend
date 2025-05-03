import { createAction, props } from '@ngrx/store';
import { createUserFromTelegramSlice } from '../create-user-from-telegram.slice';

export const callCreateUserFromTelegramFailedAction = createAction(
    `[${createUserFromTelegramSlice}] call failed`,
    props<{ error: any }>()
);
