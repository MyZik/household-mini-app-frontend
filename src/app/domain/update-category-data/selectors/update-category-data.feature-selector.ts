import { createFeatureSelector } from '@ngrx/store';
import { UpdateCategoryDataState } from '../models/update-category-data.state';
import { updateCategoryDataSlice } from '../update-category-data.slice';

export const updateCategoryDataFeatureSelector =
    createFeatureSelector<UpdateCategoryDataState>(updateCategoryDataSlice);
