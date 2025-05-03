import { createSelector } from '@ngrx/store';
import { categoriesFeatureSelector } from './categories.feature-selector';

export const isCreateCategoryFormActiveSelector = createSelector(
    categoriesFeatureSelector,
    (state): boolean => {
        return state.isCreateFormActive;
    }
);
