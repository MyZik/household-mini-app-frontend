import { createFeatureSelector } from '@ngrx/store';
import { HouseholdsState } from '../models/households.state';
import { householdsSlice } from '../households.slice';

export const householdsLayerStateSelector = createFeatureSelector<HouseholdsState>(householdsSlice);
