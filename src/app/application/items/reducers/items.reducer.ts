import { createReducer, on } from '@ngrx/store';
import { createItemButtonClickedAction } from '../actions/create-item-button-clicked.action';
import { callCreateItemSucceededAction } from '../../../domain/create-item/actions/call-create-item.succeeded.action';
import { cancelCreateItemButtonClickedAction } from '../actions/cancel-create-item-button-clicked.action';
import { callCreateItemFailedAction } from '../../../domain/create-item/actions/call-create-item.failed.action';
import { initialItemsState, ItemsState } from '../models/items.state';
import { categoryCollapsedAction } from '../actions/category-collapsed.action';
import { createItemFormSubmittedAction } from '../actions/create-item-form-submitted.action';
import { itemQuantityEditModalOpenedAction } from '../actions/item-quantity-edit-modal-opened.action';
import { itemQuantityEditModalClosedAction } from '../actions/item-quantity-edit-modal-closed.action';
import { callUpdateItemQuantitySucceededAction } from '../../../domain/update-item-quantity/actions/call-update-item-quantity.succeeded.action';

export const itemsReducer = createReducer<ItemsState>(
    initialItemsState,
    on(createItemButtonClickedAction, (state, action) => {
        if (state.activeCategoryFormsIds.includes(action.categoryId)) {
            return state;
        }
        return {
            ...state,
            activeCategoryFormsIds: [...state.activeCategoryFormsIds, action.categoryId],
        };
    }),
    on(createItemFormSubmittedAction, (state, action) => {
        if (state.submittedFormsCategoryIds.includes(action.categoryId)) {
            return state;
        }
        return {
            ...state,
            activeCategoryFormsIds: state.activeCategoryFormsIds.filter(
                id => id !== action.categoryId
            ),
            submittedFormsCategoryIds: [...state.submittedFormsCategoryIds, action.categoryId],
        };
    }),
    on(callCreateItemSucceededAction, (state, action) => {
        return {
            ...state,
            activeCategoryFormsIds: state.activeCategoryFormsIds.filter(
                id => id !== action.categoryId
            ),
            submittedFormsCategoryIds: state.submittedFormsCategoryIds.filter(
                id => id !== action.categoryId
            ),
        };
    }),
    on(callCreateItemFailedAction, (state, _action) => {
        return state;
    }),
    on(cancelCreateItemButtonClickedAction, (state, action) => {
        return {
            ...state,
            activeCategoryFormsIds: state.activeCategoryFormsIds.filter(
                id => id !== action.categoryId
            ),
            submittedFormsCategoryIds: [...state.submittedFormsCategoryIds, action.categoryId],
        };
    }),
    on(categoryCollapsedAction, (state, action) => {
        return {
            ...state,
            activeCategoryFormsIds: state.activeCategoryFormsIds.filter(
                id => id !== action.categoryId
            ),
        };
    }),
    on(itemQuantityEditModalOpenedAction, (state, action) => {
        return {
            ...state,
            quantityEditModalItem: {
                itemId: action.itemId,
                itemName: action.itemName,
                quantity: action.quantity,
                quantityType: action.quantityType,
            },
        };
    }),
    on(itemQuantityEditModalClosedAction, (state) => {
        return {
            ...state,
            quantityEditModalItem: null,
        };
    }),
    on(callUpdateItemQuantitySucceededAction, (state, action) => {
        return {
            ...state,
            quantityUpdates: {
                ...state.quantityUpdates,
                [action.itemId]: {
                    quantity: action.quantity,
                    quantityType: action.quantityType,
                },
            },
        };
    })
);
