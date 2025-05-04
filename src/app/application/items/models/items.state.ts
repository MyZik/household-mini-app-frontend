export interface ItemsState {
    activeCategoryFormsIds: number[]; // Liste der Kategorie-IDs, für die Formulare aktiv sind
    submittedFormsCategoryIds: number[]; // Liste der Kategorie-IDs, deren Formulare abgeschickt wurden
}

export const initialItemsState: ItemsState = {
    activeCategoryFormsIds: [],
    submittedFormsCategoryIds: [],
};
