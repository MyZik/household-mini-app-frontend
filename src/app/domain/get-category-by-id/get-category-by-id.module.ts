import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getCategoryByIdReducer } from './reducers/get-category-by-id.reducer';
import { GetCategoryByIdEffect } from './effects/get-category-by-id.effect';
import { GetCategoryByIdState } from "./models/get-category-by-id.state";
import { getCategoryByIdSlice } from "./get-category-by-id.slice";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<GetCategoryByIdState>(getCategoryByIdSlice, getCategoryByIdReducer),
    EffectsModule.forFeature([GetCategoryByIdEffect])
  ]
})
export class GetCategoryByIdModule { } 