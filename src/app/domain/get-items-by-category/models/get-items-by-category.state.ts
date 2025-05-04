import { GetItemsByCategory200Response } from '../../api-client/generated';

export type GetItemsByCategoryState = Record<
    number,
    'not-loaded' | 'loading' | 'load-failed' | GetItemsByCategory200Response
>;
