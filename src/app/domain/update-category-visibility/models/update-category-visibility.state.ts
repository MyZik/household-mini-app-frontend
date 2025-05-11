import { UpdateCategoryVisibility200Response } from '../../api-client';

export type UpdateCategoryVisibilityState = Record<
    number,
    'not-loaded' | 'loading' | 'load-failed' | UpdateCategoryVisibility200Response
>;

export const initialUpdateCategoryVisibilityState: UpdateCategoryVisibilityState = {};
