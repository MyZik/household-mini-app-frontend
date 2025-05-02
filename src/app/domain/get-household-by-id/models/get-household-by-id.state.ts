import { GetHouseholdByIdResponse } from '../../api-client/generated';

export type GetHouseholdByIdState =
    | 'not-loaded'
    | 'loading'
    | 'load-failed'
    | GetHouseholdByIdResponse;
