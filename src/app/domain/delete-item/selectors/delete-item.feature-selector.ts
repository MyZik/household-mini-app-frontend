import { createFeatureSelector } from '@ngrx/store';
import { DeleteItemState } from '../models/delete-item.state';
import { deleteItemSlice } from '../delete-item.slice';

export const deleteItemFeatureSelector = createFeatureSelector<DeleteItemState>(deleteItemSlice);
