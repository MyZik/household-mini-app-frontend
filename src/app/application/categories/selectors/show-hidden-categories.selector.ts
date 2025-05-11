import { createSelector } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const showHiddenCategoriesSelector = createSelector(
    (state: any) => state[categoriesSlice],
    categoriesState => categoriesState.showHiddenCategories
);
