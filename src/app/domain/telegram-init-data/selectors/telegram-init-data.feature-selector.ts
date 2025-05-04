import { createFeatureSelector } from '@ngrx/store';
import { TelegramInitDataState } from '../models/telegram-init-data.state';
import { telegramInitDataSlice } from '../telegram-init-data.slice';

export const telegramInitDataFeatureSelector =
    createFeatureSelector<TelegramInitDataState>(telegramInitDataSlice);
