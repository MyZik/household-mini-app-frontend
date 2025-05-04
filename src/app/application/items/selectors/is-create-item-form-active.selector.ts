import { createSelector } from '@ngrx/store';
import { itemsFeatureSelector } from './items-feature.selector';
import { ItemsState } from '../models/items.state';

export const isCreateItemFormActiveSelector = (categoryId: number) =>
    createSelector(itemsFeatureSelector, (state: ItemsState) =>
        state.activeCategoryFormsIds.includes(categoryId)
    );
