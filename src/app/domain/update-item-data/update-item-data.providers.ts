import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { updateItemDataSlice } from './update-item-data.slice';
import { updateItemDataReducer } from './reducers/update-item-data.reducer';
import { UpdateItemDataEffect } from './effects/update-item-data.effect';

export const UPDATE_ITEM_DATA_PROVIDERS = [
    provideState(updateItemDataSlice, updateItemDataReducer),
    provideEffects([UpdateItemDataEffect])
]; 