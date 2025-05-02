import { GetHouseholdCategoriesResponseBody } from '../../api-client';

export type GetHouseholdCategoriesState =
    | 'not-loaded'
    | 'loading'
    | 'load-failed'
    | GetHouseholdCategoriesResponseBody;
