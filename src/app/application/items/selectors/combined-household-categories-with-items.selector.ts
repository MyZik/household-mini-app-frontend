import { createSelector } from '@ngrx/store';
import { householdCategoriesWithItemsSelector, CategoryWithItems } from '../../households/selectors/household-categories-with-items.selector';
import { quantityUpdatesSelector } from './quantity-updates.selector';

export const combinedHouseholdCategoriesWithItemsSelector = createSelector(
    householdCategoriesWithItemsSelector,
    quantityUpdatesSelector,
    (categoriesWithItems, quantityUpdates): CategoryWithItems[] | 'loading' | 'not-loaded' | 'load-failed' => {
        if (typeof categoriesWithItems === 'string') {
            return categoriesWithItems;
        }

        return categoriesWithItems.map(category => ({
            ...category,
            items: category.items.map(item => {
                const itemId = item.id;
                if (itemId in quantityUpdates) {
                    return {
                        ...item,
                        quantity: quantityUpdates[itemId].quantity,
                        quantityType: quantityUpdates[itemId].quantityType,
                    };
                }
                return item;
            }),
        }));
    }
); 