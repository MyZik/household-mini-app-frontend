import { createSelector } from '@ngrx/store';
import { updateCategoryVisibilityFeatureSelector } from './update-category-visibility.feature-selector';

export const isUpdatingCategoryVisibilitySelector = (categoryId: number) =>
    createSelector(
        updateCategoryVisibilityFeatureSelector,
        state => state[categoryId] === 'loading'
    );
