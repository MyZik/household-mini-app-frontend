import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    TelegramInitDataInterceptor,
    telegramInitDataInterceptorFn,
} from './telegram-init-data.interceptor';

export const HTTP_INTERCEPTOR_PROVIDERS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TelegramInitDataInterceptor,
        multi: true,
    },
];

export { telegramInitDataInterceptorFn };
