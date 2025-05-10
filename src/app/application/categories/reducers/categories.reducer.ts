import { createReducer, on } from '@ngrx/store';
import { CategoriesState, initialCategoriesState } from '../models/categories.state';
import { createCategoryFormOpenedAction } from '../actions/create-category-form-opened.action';
import { cancelCreateCategoryButtonClickedAction } from '../actions/cancel-create-category-button-clicked.action';
import { callCreateCategoryRequestedAction } from '../../../domain/create-category';

export const categoriesReducer = createReducer<CategoriesState>(
    initialCategoriesState,
    on(createCategoryFormOpenedAction, state => {
        return {
            ...state,
            isCreateFormActive: true,
        };
    }),
    on(callCreateCategoryRequestedAction, state => {
        return {
            ...state,
            isCreateFormActive: false,
        };
    }),
    on(cancelCreateCategoryButtonClickedAction, state => {
        return {
            ...state,
            isCreateFormActive: false,
        };
    })
);
