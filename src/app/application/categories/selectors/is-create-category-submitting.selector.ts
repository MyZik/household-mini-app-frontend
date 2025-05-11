import { createSelector } from '@ngrx/store';
import { createCategoryFeatureSelector } from '../../../domain/create-category';

export const isCreateCategorySubmittingSelector = createSelector(
    createCategoryFeatureSelector,
    (state): boolean => {
        return state === 'submitting';
    }
);
