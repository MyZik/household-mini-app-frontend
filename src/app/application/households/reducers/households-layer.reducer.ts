import { createReducer } from '@ngrx/store';
import {
    HouseholdsLayerState,
    initialHouseholdsLayerState,
} from '../models/households-layer.state';

export const householdsLayerReducer = createReducer<HouseholdsLayerState>(
    initialHouseholdsLayerState
);
