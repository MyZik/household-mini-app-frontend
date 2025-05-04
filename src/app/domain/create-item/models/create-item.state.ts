import { CreateItem201Response } from '../../api-client/generated';

export type CreateItemState =
    | 'not-submitted'
    | 'submitting'
    | 'submit-failed'
    | CreateItem201Response;
