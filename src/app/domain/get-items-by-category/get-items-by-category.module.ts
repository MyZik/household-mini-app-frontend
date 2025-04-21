import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {getItemsByCategoryReducer} from './reducers/get-items-by-category.reducer';
import {GetItemsByCategoryEffect} from './effects/get-items-by-category.effect';
import {GetItemsByCategoryState} from "./models/get-items-by-category.state";
import {getItemsByCategorySlice} from "./get-items-by-category.slice";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<GetItemsByCategoryState>(getItemsByCategorySlice, getItemsByCategoryReducer),
    EffectsModule.forFeature([GetItemsByCategoryEffect])
  ]
})
export class GetItemsByCategoryModule {
} 