import { GetUserByTelegramIdResponseBody } from '../../api-client';

export type GetUserByTelegramIdState =
    | 'not-loaded'
    | 'loading'
    | 'load-failed'
    | null
    | GetUserByTelegramIdResponseBody;
