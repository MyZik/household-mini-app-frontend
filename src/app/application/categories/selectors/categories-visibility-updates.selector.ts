import { createSelector } from '@ngrx/store';
import { categoriesSlice } from '../categories.slice';

export const categoriesVisibilityUpdatesSelector = createSelector(
    (state: any) => state[categoriesSlice],
    state => state.visibilityUpdates
);
