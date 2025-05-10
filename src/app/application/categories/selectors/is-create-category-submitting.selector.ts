import { createSelector } from '@ngrx/store';
import { categoriesFeatureSelector } from './categories.feature-selector';
import { createCategoryFeatureSelector } from '../../../domain/create-category';

export const isCreateCategorySubmittingSelector = createSelector(
    createCategoryFeatureSelector,
    (state): boolean => {
        return state === 'submitting';
    }
);
