import { createFeatureSelector } from '@ngrx/store';
import { GetUserByTelegramIdState } from '../models/get-user-by-telegram-id.state';
import { getUserByTelegramIdSlice } from '../get-user-by-telegram-id.slice';

export const getUserByTelegramIdFeatureSelector =
    createFeatureSelector<GetUserByTelegramIdState>(getUserByTelegramIdSlice);
