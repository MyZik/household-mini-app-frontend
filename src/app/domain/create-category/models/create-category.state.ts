import { CreateCategory201Response } from '../../api-client/generated';

export type CreateCategoryState =
    | 'not-submitted'
    | 'submitting'
    | 'submit-failed'
    | CreateCategory201Response;
