import { createSelector } from '@ngrx/store';
import { telegramInitDataFeatureSelector } from '../../../domain/telegram-init-data';

export const telegramInitDataStatusSelector = createSelector(
    telegramInitDataFeatureSelector,
    state => ({
        isLoaded: !!state.initDataUnsafe,
        hasUser: !!state.initDataUnsafe?.user,
    })
);
