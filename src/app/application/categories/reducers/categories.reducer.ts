import { createReducer, on } from '@ngrx/store';
import { CategoriesState, initialCategoriesState } from '../models/categories.state';
import { createCategoryButtonClickedAction } from '../actions/create-category-button-clicked.action';
import { callCreateCategorySucceededAction } from '../../../domain/create-category/actions/call-create-category.succeeded.action';
import { cancelCreateCategoryButtonClickedAction } from '../actions/cancel-create-category-button-clicked.action';
import { callCreateCategoryFailedAction } from '../../../domain/create-category/actions/call-create-category.failed.action';
import { createCategoryFormSubmittedAction } from '../actions/create-category-form-submitted.action';

export const categoriesReducer = createReducer<CategoriesState>(
    initialCategoriesState,
    on(createCategoryButtonClickedAction, state => {
        return {
            ...state,
            isCreateFormActive: true,
        };
    }),
    on(createCategoryFormSubmittedAction, state => {
        return {
            ...state,
            isCreateFormSubmitted: true,
            isCreateFormActive: false,
        };
    }),
    on(callCreateCategorySucceededAction, state => {
        return {
            ...state,
            isCreateFormActive: false,
            isCreateFormSubmitted: false,
        };
    }),
    on(callCreateCategoryFailedAction, state => {
        return {
            ...state,
            isCreateFormActive: false,
            isCreateFormSubmitted: false,
        };
    }),
    on(cancelCreateCategoryButtonClickedAction, state => {
        return {
            ...state,
            isCreateFormActive: false,
            isCreateFormSubmitted: true,
        };
    })
);
