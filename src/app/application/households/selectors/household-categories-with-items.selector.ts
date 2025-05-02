import { createSelector } from '@ngrx/store';
import { householdCategoriesSelector } from './household-categories.selector';
import { householdItemsSelector } from './household-items.selector';

export interface CategoryWithItems {
    id: number;
    name: string;
    emoji: string;
    items: ItemModel[];
}

export interface ItemModel {
    id: number;
    categoryId: number;
    name: string;
    emoji: string;
    quantity: number;
}

export const householdCategoriesWithItemsSelector = createSelector(
    householdCategoriesSelector,
    householdItemsSelector,
    (categories, items): CategoryWithItems[] | 'loading' | 'not-loaded' | 'load-failed' => {
        if (typeof categories === 'string') {
            return categories;
        }

        if (typeof items === 'string') {
            return items;
        }

        const result = [];

        for (const category of categories) {
            result.push({
                id: category.id,
                name: category.name,
                emoji: category.emoji,
                items: items.filter(item => item.categoryId === category.id),
            });
        }

        return result;
    }
);
