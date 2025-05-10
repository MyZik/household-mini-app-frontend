import { createSelector } from '@ngrx/store';
import { deleteCategoryFeatureSelector } from '../../../domain/delete-category';

export const isDeleteCategoryLoadingSelector = createSelector(
    deleteCategoryFeatureSelector,
    (state): boolean => {
        return state === 'loading';
    }
);
