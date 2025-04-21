import {createFeatureSelector} from '@ngrx/store';
import {GetCategoriesState} from '../models/get-categories.state';

export const getCategoriesFeatureSelector = createFeatureSelector<GetCategoriesState>('getCategories');
