import { createSelector } from '@ngrx/store';
import { itemsFeatureSelector } from './items-feature.selector';
import { ItemsState } from '../models/items.state';

export const isCreateItemFormSubmittedSelector = (categoryId: number) =>
    createSelector(itemsFeatureSelector, (state: ItemsState) =>
        state.submittedFormsCategoryIds.includes(categoryId)
    );
