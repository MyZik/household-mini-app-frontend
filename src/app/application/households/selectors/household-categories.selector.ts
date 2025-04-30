import {createSelector} from "@ngrx/store";
import {getHouseholdCategoriesFeatureSelector} from "../../../domain/get-household-categories";
import {Category} from "../../models/category";

export const householdCategoriesSelector = createSelector(
  getHouseholdCategoriesFeatureSelector,
  (categoriesState): Category[] | null => {
    if (categoriesState === 'loading' || categoriesState === 'load-failed' || categoriesState === 'not-loaded') {
      return null;
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
