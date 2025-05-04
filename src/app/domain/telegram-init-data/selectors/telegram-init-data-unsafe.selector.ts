import { createSelector } from '@ngrx/store';
import { telegramInitDataFeatureSelector } from './telegram-init-data.feature-selector';

export const telegramInitDataUnsafeSelector = createSelector(
    telegramInitDataFeatureSelector,
    state => state.initDataUnsafe
);
