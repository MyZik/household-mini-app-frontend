import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { deleteItemSlice } from './delete-item.slice';
import { deleteItemReducer } from './reducers/delete-item.reducer';
import { DeleteItemEffect } from './effects/delete-item.effect';

export const DELETE_ITEM_PROVIDERS = [
    provideState(deleteItemSlice, deleteItemReducer),
    provideEffects([DeleteItemEffect])
]; 