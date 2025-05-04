import { createSelector } from '@ngrx/store';
import { GetItemsByCategoryState } from '../models/get-items-by-category.state';
import { GetItemsByCategory200Response } from '../../api-client/generated';
import { getItemsByCategoryFeatureSelector } from './get-items-by-category.feature-selector';

export const getCategoryItemsSelector = (categoryId: number) =>
    createSelector(getItemsByCategoryFeatureSelector, state => {
        const categoryState = state[categoryId];
        if (
            categoryState === 'loading' ||
            categoryState === 'load-failed' ||
            categoryState === 'not-loaded'
        ) {
            return categoryState;
        }
        return categoryState as GetItemsByCategory200Response;
    });

export const isLoadingItemsByCategorySelector = (categoryId: number) =>
    createSelector(
        getItemsByCategoryFeatureSelector,
        (state: GetItemsByCategoryState) => state[categoryId] === 'loading'
    );
