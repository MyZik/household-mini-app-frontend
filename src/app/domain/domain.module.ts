import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCategoriesModule } from './get-categories';
import { GetCategoryByIdModule } from './get-category-by-id';
import { GetItemsByCategoryIdModule } from './get-items-by-category';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GetCategoriesModule,
    GetCategoryByIdModule,
    GetItemsByCategoryIdModule,
  ],
  exports: [
    GetCategoriesModule,
    GetCategoryByIdModule,
    GetItemsByCategoryIdModule,
  ]
})
export class DomainModule { }
