import {createSelector} from "@ngrx/store";
import {getHouseholdItemsFeatureSelector} from "../../../domain/get-household-items";
import {Item} from "../../models/item";

export const householdItemsSelector = createSelector(
  getHouseholdItemsFeatureSelector,
  (itemsState): Item[] | null => {
    if (itemsState === 'loading' || itemsState === 'load-failed' || itemsState === 'not-loaded') {
      return null;
    }

    return itemsState.items.map(
      (item) => ({
        id: item.id,
        categoryId: item.categoryId,
        householdId: item.householdId,
        name: item.name,
        emoji: item.emoji,
        quantity: item.quantity
      })
    );
  }
);
