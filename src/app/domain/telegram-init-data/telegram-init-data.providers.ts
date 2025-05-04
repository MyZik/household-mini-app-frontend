import { provideState } from '@ngrx/store';
import { telegramInitDataSlice } from './telegram-init-data.slice';
import { telegramInitDataReducer } from './reducers/telegram-init-data.reducer';

export const TELEGRAM_INIT_DATA_PROVIDERS = [
    provideState(telegramInitDataSlice, telegramInitDataReducer),
];
