import { createSelector } from '@ngrx/store';
import { householdCategoriesSelector } from '../../households/selectors/household-categories.selector';
import { GetHouseholdCategoriesResponseBodyCategoriesInner } from '../../../domain/api-client';
import { showHiddenCategoriesSelector } from './show-hidden-categories.selector';
import { categoriesVisibilityUpdatesSelector } from './categories-visibility-updates.selector';
import { categoryDataUpdatesSelector } from './category-data-updates.selector';

export const combinedHouseholdCategoriesSelector = createSelector(
    householdCategoriesSelector,
    categoriesVisibilityUpdatesSelector,
    categoryDataUpdatesSelector,
    showHiddenCategoriesSelector,
    (
        domainCategories,
        visibilityUpdates,
        dataUpdates,
        showHiddenCategories
    ):
        | 'not-loaded'
        | 'loading'
        | 'load-failed'
        | GetHouseholdCategoriesResponseBodyCategoriesInner[] => {
        if (typeof domainCategories === 'string') {
            return domainCategories;
        }

        const categoriesWithUpdates = domainCategories.map(category => {
            const categoryId = category.id;
            let updatedCategory = { ...category };

            if (categoryId in visibilityUpdates) {
                updatedCategory = {
                    ...updatedCategory,
                    isVisibleForCurrentUser: visibilityUpdates[categoryId],
                };
            }

            if (categoryId in dataUpdates) {
                updatedCategory = {
                    ...updatedCategory,
                    name: dataUpdates[categoryId].name,
                    emoji: dataUpdates[categoryId].emoji,
                };
            }

            return updatedCategory;
        });

        if (!showHiddenCategories) {
            return categoriesWithUpdates.filter(category => category.isVisibleForCurrentUser);
        }

        return categoriesWithUpdates;
    }
);
