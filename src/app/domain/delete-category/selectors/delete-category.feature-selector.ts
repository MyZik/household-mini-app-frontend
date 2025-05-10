import { createFeatureSelector } from '@ngrx/store';
import { DeleteCategoryState } from '../models/delete-category.state';
import { deleteCategorySlice } from '../delete-category.slice';

export const deleteCategoryFeatureSelector =
    createFeatureSelector<DeleteCategoryState>(deleteCategorySlice);
