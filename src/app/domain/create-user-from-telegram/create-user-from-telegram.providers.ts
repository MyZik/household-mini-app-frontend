import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { createUserFromTelegramSlice } from './create-user-from-telegram.slice';
import { createUserFromTelegramReducer } from './reducers/create-user-from-telegram.reducer';
import { CreateUserFromTelegramEffect } from './effects/create-user-from-telegram.effect';

export const CREATE_USER_FROM_TELEGRAM_PROVIDERS = [
    provideState(createUserFromTelegramSlice, createUserFromTelegramReducer),
    provideEffects([CreateUserFromTelegramEffect]),
];
