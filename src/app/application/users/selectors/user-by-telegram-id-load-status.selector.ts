import { createSelector } from '@ngrx/store';
import { getUserByTelegramIdFeatureSelector } from '../../../domain/get-user-by-telegram-id';

export const userByTelegramIdLoadStatusSelector = createSelector(
    getUserByTelegramIdFeatureSelector,
    (state): 'not-loaded' | 'loading' | 'load-failed' | 'loaded' => {
        switch (state) {
            case 'loading':
                return 'loading';
            case 'load-failed':
                return 'load-failed';
            case 'not-loaded':
                return 'not-loaded';
            default:
                return 'loaded';
        }
    }
);
