import { createFeatureSelector } from '@ngrx/store';
import { GetItemsByCategoryState } from '../models/get-items-by-category.state';
import { getItemsByCategorySlice } from '../get-items-by-category.slice';

export const getItemsByCategoryFeatureSelector =
    createFeatureSelector<GetItemsByCategoryState>(getItemsByCategorySlice);
