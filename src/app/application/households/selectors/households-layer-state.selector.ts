import { createFeatureSelector } from '@ngrx/store';
import { HouseholdsLayerState } from '../models/households-layer.state';
import { householdsLayerSlice } from '../households-layer.slice';

export const householdsLayerStateSelector = createFeatureSelector<HouseholdsLayerState>(householdsLayerSlice); 