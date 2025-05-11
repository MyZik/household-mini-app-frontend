import { createSelector } from '@ngrx/store';
import { getHouseholdCategoriesFeatureSelector } from '../../../domain/get-household-categories';
import { GetHouseholdCategoriesResponseBodyCategoriesInner } from '../../../domain/api-client';

export const householdCategoriesSelector = createSelector(
    getHouseholdCategoriesFeatureSelector,
    (
        categoriesState
    ):
        | 'not-loaded'
        | 'loading'
        | 'load-failed'
        | GetHouseholdCategoriesResponseBodyCategoriesInner[] => {
        if (
            categoriesState === 'loading' ||
            categoriesState === 'load-failed' ||
            categoriesState === 'not-loaded'
        ) {
            return categoriesState;
        }

        return categoriesState.categories;
    }
);
