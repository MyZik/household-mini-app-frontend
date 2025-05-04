import { createFeatureSelector } from '@ngrx/store';
import { ItemsState } from '../models/items.state';
import { itemsSlice } from '../items.slice';

export const itemsFeatureSelector = createFeatureSelector<ItemsState>(itemsSlice);
