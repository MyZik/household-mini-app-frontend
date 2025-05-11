import { createFeatureSelector } from '@ngrx/store';
import { UpdateCategoryVisibilityState } from '../models/update-category-visibility.state';
import { updateCategoryVisibilitySlice } from '../update-category-visibility.slice';

export const updateCategoryVisibilityFeatureSelector =
    createFeatureSelector<UpdateCategoryVisibilityState>(updateCategoryVisibilitySlice);
