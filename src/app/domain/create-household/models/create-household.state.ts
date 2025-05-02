import { CreateHouseholdResponse } from '../../api-client/generated';

export type CreateHouseholdState =
    | 'not-submitted'
    | 'submitting'
    | 'submit-failed'
    | CreateHouseholdResponse;
