export interface CategoriesState {
    isCreateFormActive: boolean;
    isCreateFormSubmitted: boolean;
}

export const initialCategoriesState: CategoriesState = {
    isCreateFormActive: false,
    isCreateFormSubmitted: false,
};
