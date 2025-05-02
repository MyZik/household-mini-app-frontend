import { createSelector } from '@ngrx/store';
import { getHouseholdItemsFeatureSelector } from '../../../domain/get-household-items';
import { Item } from '../../models/item';

export const householdItemsSelector = createSelector(
    getHouseholdItemsFeatureSelector,
    (itemsState): 'not-loaded' | 'loading' | 'load-failed' | Item[] => {
        if (
            itemsState === 'loading' ||
            itemsState === 'load-failed' ||
            itemsState === 'not-loaded'
        ) {
            return itemsState;
        }

        return itemsState.items.map(item => ({
            id: item.id,
            categoryId: item.categoryId,
            householdId: item.householdId,
            name: item.name,
            emoji: item.emoji,
            quantity: item.quantity,
        }));
    }
);
