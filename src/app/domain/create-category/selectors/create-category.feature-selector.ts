import { createFeatureSelector } from '@ngrx/store';
import { CreateCategoryState } from '../models/create-category.state';
import { createCategorySlice } from '../create-category.slice';

export const selectCreateCategoryFeature = createFeatureSelector<CreateCategoryState>(createCategorySlice); 