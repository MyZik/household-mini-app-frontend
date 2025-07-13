import { createFeatureSelector } from '@ngrx/store';
import { UpdateItemDataState } from '../models/update-item-data.state';
import { updateItemDataSlice } from '../update-item-data.slice';

export const updateItemDataFeatureSelector = createFeatureSelector<UpdateItemDataState>(updateItemDataSlice); 