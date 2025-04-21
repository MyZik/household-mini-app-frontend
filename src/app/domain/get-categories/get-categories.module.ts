import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {getCategoriesReducer} from './reducers/get-categories.reducer';
import {GetCategoriesEffect} from './effects/get-categories.effect';
import {GetCategoriesState} from "./models/get-categories.state";
import {getCategoriesSlice} from "./get-categories.slice";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<GetCategoriesState>(getCategoriesSlice, getCategoriesReducer),
    EffectsModule.forFeature([GetCategoriesEffect])
  ]
})
export class GetCategoriesModule {
}
