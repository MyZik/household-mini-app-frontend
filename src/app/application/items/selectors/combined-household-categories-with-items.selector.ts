import { createSelector } from '@ngrx/store';
import { householdCategoriesWithItemsSelector, CategoryWithItems } from '../../households/selectors/household-categories-with-items.selector';
import { quantityUpdatesSelector } from './quantity-updates.selector';
import { itemDataUpdatesSelector } from './item-data-updates.selector';

export const combinedHouseholdCategoriesWithItemsSelector = createSelector(
    householdCategoriesWithItemsSelector,
    quantityUpdatesSelector,
    itemDataUpdatesSelector,
    (categoriesWithItems, quantityUpdates, itemDataUpdates): CategoryWithItems[] | 'loading' | 'not-loaded' | 'load-failed' => {
        if (typeof categoriesWithItems === 'string') {
            return categoriesWithItems;
        }

        return categoriesWithItems.map(category => ({
            ...category,
            items: category.items.map(item => {
                const itemId = item.id;
                let updatedItem = item;
                
                // Apply quantity updates
                if (itemId in quantityUpdates) {
                    updatedItem = {
                        ...updatedItem,
                        quantity: quantityUpdates[itemId].quantity,
                        quantityType: quantityUpdates[itemId].quantityType,
                    };
                }
                
                // Apply item data updates
                if (itemId in itemDataUpdates) {
                    updatedItem = {
                        ...updatedItem,
                        name: itemDataUpdates[itemId].name,
                        emoji: itemDataUpdates[itemId].emoji,
                        quantity: itemDataUpdates[itemId].quantity,
                        quantityType: itemDataUpdates[itemId].quantityType,
                    };
                }
                
                return updatedItem;
            }),
        }));
    }
); 