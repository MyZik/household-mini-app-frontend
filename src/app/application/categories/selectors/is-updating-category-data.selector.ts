import { createSelector } from '@ngrx/store';
import { updateCategoryDataFeatureSelector } from '../../../domain/update-category-data/selectors/update-category-data.feature-selector';

export const isUpdatingCategoryDataSelector = (categoryId: number) =>
    createSelector(updateCategoryDataFeatureSelector, state => {
        return state[categoryId] === 'submitting';
    });
