import { createFeatureSelector } from '@ngrx/store';
import { getCategoryByIdSlice } from '../get-category-by-id.slice';
import { GetCategoryByIdState } from '../models/get-category-by-id.state';

export const getCategoryByIdFeatureSelector =
    createFeatureSelector<GetCategoryByIdState>(getCategoryByIdSlice);
