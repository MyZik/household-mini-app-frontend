import { createFeatureSelector } from '@ngrx/store';
import { GetCategoryByIdState } from '../models/get-category-by-id.state';

export const getCategoryByIdFeatureSelector = createFeatureSelector<GetCategoryByIdState>('getCategoryById');
