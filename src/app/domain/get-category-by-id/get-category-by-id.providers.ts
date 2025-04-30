import {provideState} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {getCategoryByIdSlice} from "./get-category-by-id.slice";
import {getCategoryByIdReducer} from "./reducers/get-category-by-id.reducer";
import {GetCategoryByIdEffect} from "./effects/get-category-by-id.effect";

export const GET_CATEGORY_BY_ID_PROVIDERS = [
  provideState(getCategoryByIdSlice, getCategoryByIdReducer),
  provideEffects([GetCategoryByIdEffect])
];
