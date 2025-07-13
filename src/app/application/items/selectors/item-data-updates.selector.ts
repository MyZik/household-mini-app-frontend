import { createSelector } from '@ngrx/store';
import { itemsFeatureSelector } from './items-feature.selector';

export const itemDataUpdatesSelector = createSelector(
    itemsFeatureSelector,
    (state) => state.itemDataUpdates
); 