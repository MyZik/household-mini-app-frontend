import { createFeatureSelector } from '@ngrx/store';
import { CreateItemState } from '../models/create-item.state';
import { createItemSlice } from '../create-item.slice';

export const createItemFeatureSelector = createFeatureSelector<CreateItemState>(createItemSlice);
