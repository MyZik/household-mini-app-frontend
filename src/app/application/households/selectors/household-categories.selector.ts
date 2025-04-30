import {createSelector} from "@ngrx/store";
import {getHouseholdCategoriesFeatureSelector} from "../../../domain/get-household-categories";
import {Category} from "../../models/category";

export const householdCategoriesSelector = createSelector(
  getHouseholdCategoriesFeatureSelector,
  (categoriesState): 'not-loaded' | 'loading' | 'load-failed' | Category[] => {
    if (categoriesState === 'loading' || categoriesState === 'load-failed' || categoriesState === 'not-loaded') {
      return categoriesState;
    }

    return categoriesState.categories.map(
      (category) => ({
        id: category.id,
        name: category.name,
        emoji: category.emoji,
      })
    );
  }
);
