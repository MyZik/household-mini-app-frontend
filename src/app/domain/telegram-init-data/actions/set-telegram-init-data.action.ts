import { createAction, props } from '@ngrx/store';
import { telegramInitDataSlice } from '../telegram-init-data.slice';

export const setTelegramInitDataAction = createAction(
    `[${telegramInitDataSlice}] set telegram init data`,
    props<{
        initData: string | null;
        // initDataUnsafe: {
        //     query_id?: string;
        //     user?: {
        //         id: number;
        //         is_bot?: boolean;
        //         first_name?: string;
        //         last_name?: string | null;
        //         username?: string | null;
        //         language_code?: string;
        //         is_premium?: boolean;
        //         added_to_attachment_menu?: boolean;
        //         allows_write_to_pm?: boolean;
        //         photo_url?: string | null;
        //     };
        //     auth_date?: number;
        //     hash?: string;
        // } | null;
    }>()
);
