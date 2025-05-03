import { createReducer } from '@ngrx/store';
import { HouseholdsState, initialHouseholdsState } from '../models/households.state';

export const householdsReducer = createReducer<HouseholdsState>(initialHouseholdsState);
