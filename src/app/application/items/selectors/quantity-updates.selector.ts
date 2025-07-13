import { createSelector } from '@ngrx/store';
import { itemsFeatureSelector } from './items-feature.selector';

export const quantityUpdatesSelector = createSelector(
    itemsFeatureSelector,
    state => state.quantityUpdates
); 