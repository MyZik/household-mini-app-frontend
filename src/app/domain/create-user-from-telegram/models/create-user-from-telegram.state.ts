import { CreateUserFromTelegramResponseBody } from '../../api-client/generated';

export type CreateUserFromTelegramState =
    | 'not-submitted'
    | 'submitting'
    | 'submit-failed'
    | CreateUserFromTelegramResponseBody;
