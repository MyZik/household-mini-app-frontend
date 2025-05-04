import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpHandlerFn,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { telegramInitDataFeatureSelector } from '../../domain/telegram-init-data';
import { exhaustMap, first } from 'rxjs/operators';

@Injectable()
export class TelegramInitDataInterceptor implements HttpInterceptor {
    constructor(private readonly store: Store) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this.store.select(telegramInitDataFeatureSelector).pipe(
            first(),
            exhaustMap(telegramInitData => {
                if (!telegramInitData || !telegramInitData.initData) {
                    return next.handle(request);
                }

                const modifiedRequest = request.clone({
                    setHeaders: {
                        'Authorization': `tma ${telegramInitData.initData}`,
                    },
                });

                return next.handle(modifiedRequest);
            })
        );
    }
}

export function telegramInitDataInterceptorFn(store: Store) {
    return (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
        return store.select(telegramInitDataFeatureSelector).pipe(
            first(),
            exhaustMap(telegramInitData => {
                if (!telegramInitData || !telegramInitData.initData) {
                    return next(req);
                }

                const modifiedRequest = req.clone({
                    setHeaders: {
                        'Authorization': `tma ${telegramInitData.initData}`,
                    },
                });

                return next(modifiedRequest);
            })
        );
    };
}
