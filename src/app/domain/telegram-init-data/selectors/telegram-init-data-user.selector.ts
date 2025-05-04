import { createSelector } from '@ngrx/store';
import { telegramInitDataUnsafeSelector } from './telegram-init-data-unsafe.selector';

export const telegramInitDataUserSelector = createSelector(
    telegramInitDataUnsafeSelector,
    initDataUnsafe => initDataUnsafe?.user || null
);
