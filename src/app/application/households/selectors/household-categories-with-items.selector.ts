import { createSelector } from '@ngrx/store';
import { householdItemsSelector } from './household-items.selector';
import { getItemsByCategoryFeatureSelector } from '../../../domain/get-items-by-category';
import { combinedHouseholdCategoriesSelector } from '../../categories/selectors/combined-household-categories.selector';

export interface CategoryWithItems {
    id: number;
    name: string;
    emoji: string;
    isVisibleForCurrentUser: boolean;
    items: ItemModel[];
}

export interface ItemModel {
    id: number;
    categoryId: number;
    name: string;
    emoji: string;
    quantity: number;
    quantityType?: string;
}

export const householdCategoriesWithItemsSelector = createSelector(
    combinedHouseholdCategoriesSelector,
    householdItemsSelector,
    getItemsByCategoryFeatureSelector,
    (
        categories,
        items,
        itemsByCategoryState
    ): CategoryWithItems[] | 'loading' | 'not-loaded' | 'load-failed' => {
        if (typeof categories === 'string') {
            return categories;
        }

        if (typeof items === 'string') {
            return items;
        }

        const result = [];

        for (const category of categories) {
            const categoryItems = [];

            categoryItems.push(...items.filter(item => item.categoryId === category.id));

            const categoryItemsState = itemsByCategoryState[category.id];
            if (
                categoryItemsState &&
                typeof categoryItemsState !== 'string' &&
                categoryItemsState.items
            ) {
                const foundCategoryItems = categoryItemsState.items;

                if (foundCategoryItems.length > 0) {
                    categoryItems.length = 0;
                    categoryItems.push(
                        ...foundCategoryItems.map(item => ({
                            id: item.id,
                            categoryId: item.categoryId,
                            name: item.name,
                            emoji: item.emoji,
                            quantity: item.quantity,
                        }))
                    );
                }
            }

            result.push({
                id: category.id,
                name: category.name,
                emoji: category.emoji,
                isVisibleForCurrentUser: category.isVisibleForCurrentUser,
                items: categoryItems,
            });
        }

        return result;
    }
);
