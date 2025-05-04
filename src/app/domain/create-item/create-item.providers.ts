import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { createItemSlice } from './create-item.slice';
import { createItemReducer } from './reducers/create-item.reducer';
import { CreateItemEffect } from './effects/create-item.effect';

export const CREATE_ITEM_PROVIDERS = [
    provideState(createItemSlice, createItemReducer),
    provideEffects([CreateItemEffect]),
];
