import { UpdateCategoryVisibility200Response } from '../../api-client';

export type CategoryVisibilityItemState =
    | 'not-loaded'
    | 'loading'
    | 'load-failed'
    | UpdateCategoryVisibility200Response;

export type UpdateCategoryVisibilityState = Record<number, CategoryVisibilityItemState>;

export const initialUpdateCategoryVisibilityState: UpdateCategoryVisibilityState = {};
