import { createFeatureSelector } from '@ngrx/store';
import { CategoriesState } from '../state/categories.state';
import { categoriesSlice } from '../categories.slice';

export const categoriesFeatureSelector = createFeatureSelector<CategoriesState>(categoriesSlice);
