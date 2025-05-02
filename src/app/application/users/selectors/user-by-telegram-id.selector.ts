import { createSelector } from '@ngrx/store';
import { getUserByTelegramIdFeatureSelector } from '../../../domain/get-user-by-telegram-id';
import { GetUserByTelegramIdResponseBody } from '../../../domain/api-client';

export const userByTelegramIdSelector = createSelector(
    getUserByTelegramIdFeatureSelector,
    (state): GetUserByTelegramIdResponseBody | null => {
        if (
            state === null ||
            state === 'not-loaded' ||
            state === 'loading' ||
            state === 'load-failed'
        ) {
            return null;
        }

        return state;
    }
);
