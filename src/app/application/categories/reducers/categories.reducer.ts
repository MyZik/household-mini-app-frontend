import { createReducer, on } from '@ngrx/store';
import { CategoriesState, initialCategoriesState } from '../models/categories.state';
import { createCategoryFormOpenedAction } from '../actions/create-category-form-opened.action';
import { cancelCreateCategoryButtonClickedAction } from '../actions/cancel-create-category-button-clicked.action';
import { callCreateCategoryRequestedAction } from '../../../domain/create-category';
import { toggleShowHiddenCategoriesAction } from '../actions/toggle-show-hidden-categories.action';
import { callDeleteCategoryRequestedAction } from '../../../domain/delete-category';
import { callUpdateCategoryVisibilitySucceededAction } from '../../../domain/update-category-visibility/actions/call-update-category-visibility.succeeded.action';
import { callUpdateCategoryDataSucceededAction } from '../../../domain/update-category-data/actions/call-update-category-data.succeeded.action';

export const categoriesReducer = createReducer<CategoriesState>(
    initialCategoriesState,
    on(createCategoryFormOpenedAction, state => {
        return {
            ...state,
            isCreateCategoryFormActive: true,
        };
    }),
    on(callCreateCategoryRequestedAction, state => {
        return {
            ...state,
            isCreateCategoryFormActive: false,
            isCreateCategorySubmitting: true,
        };
    }),
    on(cancelCreateCategoryButtonClickedAction, state => {
        return {
            ...state,
            isCreateCategoryFormActive: false,
        };
    }),
    on(callDeleteCategoryRequestedAction, state => {
        return {
            ...state,
            isDeleteCategoryLoading: true,
        };
    }),
    on(toggleShowHiddenCategoriesAction, state => {
        return {
            ...state,
            showHiddenCategories: !state.showHiddenCategories,
        };
    }),
    on(callUpdateCategoryVisibilitySucceededAction, (state, action) => {
        return {
            ...state,
            visibilityUpdates: {
                ...state.visibilityUpdates,
                [action.categoryId]: Boolean(action.response.isVisible),
            },
        };
    }),
    on(callUpdateCategoryDataSucceededAction, (state, action) => {
        return {
            ...state,
            categoryDataUpdates: {
                ...state.categoryDataUpdates,
                [action.categoryId]: {
                    name: action.name,
                    emoji: action.emoji,
                },
            },
        };
    })
);
