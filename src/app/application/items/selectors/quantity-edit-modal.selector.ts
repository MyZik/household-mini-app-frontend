import { createSelector } from '@ngrx/store';
import { itemsFeatureSelector } from './items-feature.selector';

export const quantityEditModalItemSelector = createSelector(
    itemsFeatureSelector,
    (state) => state.quantityEditModalItem
);

export const isQuantityEditModalOpenSelector = createSelector(
    quantityEditModalItemSelector,
    (modalItem) => modalItem !== null
); 