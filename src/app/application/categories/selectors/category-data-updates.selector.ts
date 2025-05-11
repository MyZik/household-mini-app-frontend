import { createSelector } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const categoryDataUpdatesSelector = createSelector(
    (state: any) => state[categoriesSlice],
    state => state.categoryDataUpdates
);
