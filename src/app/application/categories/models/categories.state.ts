export interface CategoriesState {
    isCreateCategoryFormActive: boolean;
    isCreateCategorySubmitting: boolean;
    isDeleteCategoryLoading: boolean;
    showHiddenCategories: boolean;
    visibilityUpdates: Record<number, boolean>; // CategoryId -> isVisible
    categoryDataUpdates: Record<number, { name: string; emoji: string }>; // CategoryId -> {name, emoji}
}

export const initialCategoriesState: CategoriesState = {
    isCreateCategoryFormActive: false,
    isCreateCategorySubmitting: false,
    isDeleteCategoryLoading: false,
    showHiddenCategories: false,
    visibilityUpdates: {},
    categoryDataUpdates: {},
};
