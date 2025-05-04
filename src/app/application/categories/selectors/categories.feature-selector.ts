import { createFeatureSelector } from '@ngrx/store';
import { CategoriesState } from '../models/categories.state';
import { categoriesSlice } from '../categories.slice';

export const categoriesFeatureSelector = createFeatureSelector<CategoriesState>(categoriesSlice);
