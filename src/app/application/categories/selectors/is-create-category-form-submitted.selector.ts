import { createSelector } from '@ngrx/store';
import { categoriesFeatureSelector } from './categories.feature-selector';

export const isCreateCategoryFormSubmittedSelector = createSelector(
    categoriesFeatureSelector,
    (state): boolean => {
        return state.isCreateFormSubmitted;
    }
);
