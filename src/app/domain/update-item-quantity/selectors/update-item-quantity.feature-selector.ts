import { createFeatureSelector } from '@ngrx/store';
import { UpdateItemQuantityState } from '../models/update-item-quantity.state';
import { updateItemQuantitySlice } from '../update-item-quantity.slice';

export const updateItemQuantityFeatureSelector = createFeatureSelector<UpdateItemQuantityState>(updateItemQuantitySlice); 