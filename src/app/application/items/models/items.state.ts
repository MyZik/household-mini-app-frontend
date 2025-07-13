export interface ItemsState {
    activeCategoryFormsIds: number[]; // Liste der Kategorie-IDs, für die Formulare aktiv sind
    submittedFormsCategoryIds: number[]; // Liste der Kategorie-IDs, deren Formulare abgeschickt wurden
    quantityEditModalItem: {
        itemId: number;
        itemName: string;
        quantity: number;
        quantityType: string;
    } | null; // Item-Daten für das Quantity-Edit-Modal
    quantityUpdates: Record<number, { quantity: number; quantityType: string }>; // ItemId -> {quantity, quantityType}
}

export const initialItemsState: ItemsState = {
    activeCategoryFormsIds: [],
    submittedFormsCategoryIds: [],
    quantityEditModalItem: null,
    quantityUpdates: {},
};
