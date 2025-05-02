import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { getUserByTelegramIdSlice } from './get-user-by-telegram-id.slice';
import { getUserByTelegramIdReducer } from './reducers/get-user-by-telegram-id.reducer';
import { GetUserByTelegramIdEffect } from './effects/get-user-by-telegram-id.effect';

export const GET_USER_BY_TELEGRAM_ID_PROVIDERS = [
    provideState(getUserByTelegramIdSlice, getUserByTelegramIdReducer),
    provideEffects([GetUserByTelegramIdEffect]),
];
