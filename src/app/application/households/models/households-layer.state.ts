import { Category } from '../../models/category';
import { Item } from '../../models/item';

export interface HouseholdsLayerState {
    pendingItems?: Item[];
    pendingCategories?: Category[];

    modifiedItems?: Record<number, Item>;
    modifiedCategories?: Record<number, Category>;

    hasPendingChanges: boolean;
}

export const initialHouseholdsLayerState: HouseholdsLayerState = {
    hasPendingChanges: false,
};
