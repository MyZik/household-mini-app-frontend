import { createSelector } from '@ngrx/store';
import { updateCategoryVisibilityFeatureSelector } from '../../../domain/update-category-visibility/selectors/update-category-visibility.feature-selector';

export const isUpdatingCategoryVisibilitySelector = (categoryId: number) =>
    createSelector(updateCategoryVisibilityFeatureSelector, state => {
        return state[categoryId] === 'loading';
    });
