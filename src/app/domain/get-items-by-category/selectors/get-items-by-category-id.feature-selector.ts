import { createFeatureSelector } from '@ngrx/store';
import {GetItemsByCategoryIdState} from "../models/get-items-by-category-id.state";

export const getItemsByCategoryIdFeatureSelector = createFeatureSelector<GetItemsByCategoryIdState>('getItemsByCategoryId');
