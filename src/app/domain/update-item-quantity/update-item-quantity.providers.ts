import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { updateItemQuantitySlice } from './update-item-quantity.slice';
import { updateItemQuantityReducer } from './reducers/update-item-quantity.reducer';
import { UpdateItemQuantityEffect } from './effects/update-item-quantity.effect';

export const UPDATE_ITEM_QUANTITY_PROVIDERS = [
    provideState(updateItemQuantitySlice, updateItemQuantityReducer),
    provideEffects([UpdateItemQuantityEffect])
]; 