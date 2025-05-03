import { createSelector } from '@ngrx/store';
import { createUserFromTelegramFeatureSelector } from '../../../domain/create-user-from-telegram';

export const createUserFromTelegramSubmitStatusSelector = createSelector(
    createUserFromTelegramFeatureSelector,
    state => {
        switch (state) {
            case 'not-submitted':
                return 'not-submitted';
            case 'submitting':
                return 'submitting';
            case 'submit-failed':
                return 'submit-failed';
            default:
                return 'submitted';
        }
    }
);
