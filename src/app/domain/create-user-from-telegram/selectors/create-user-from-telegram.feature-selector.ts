import { createFeatureSelector } from '@ngrx/store';
import { CreateUserFromTelegramState } from '../models/create-user-from-telegram.state';
import { createUserFromTelegramSlice } from '../create-user-from-telegram.slice';

export const createUserFromTelegramFeatureSelector =
    createFeatureSelector<CreateUserFromTelegramState>(createUserFromTelegramSlice);
