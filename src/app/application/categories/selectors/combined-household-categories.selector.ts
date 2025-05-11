import { createSelector } from '@ngrx/store';
import { householdCategoriesSelector } from '../../households/selectors/household-categories.selector';
import { GetHouseholdCategoriesResponseBodyCategoriesInner } from '../../../domain/api-client';
import { showHiddenCategoriesSelector } from './show-hidden-categories.selector';
import { categoriesVisibilityUpdatesSelector } from './categories-visibility-updates.selector';

export const combinedHouseholdCategoriesSelector = createSelector(
    householdCategoriesSelector,
    categoriesVisibilityUpdatesSelector,
    showHiddenCategoriesSelector,
    (
        domainCategories,
        visibilityUpdates,
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
            if (categoryId in visibilityUpdates) {
                return {
                    ...category,
                    isVisibleForCurrentUser: visibilityUpdates[categoryId],
                };
            }
            return category;
        });

        if (!showHiddenCategories) {
            return categoriesWithUpdates.filter(category => category.isVisibleForCurrentUser);
        }

        return categoriesWithUpdates;
    }
);
