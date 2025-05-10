import { createReducer, on } from '@ngrx/store';
import { TelegramInitDataState } from '../models/telegram-init-data.state';
import { setTelegramInitDataAction } from '../actions/set-telegram-init-data.action';

export const telegramInitDataReducer = createReducer<TelegramInitDataState>(
    { initData: null },
    on(setTelegramInitDataAction, (_state, action) => ({
        initData: action.initData,
        // initDataUnsafe: action.initDataUnsafe,
    }))
);
