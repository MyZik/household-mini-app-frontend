import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callGetUserByTelegramIdRequestedAction } from '../actions/call-get-user-by-telegram-id.requested.action';
import { callGetUserByTelegramIdSucceededAction } from '../actions/call-get-user-by-telegram-id.succeeded.action';
import { callGetUserByTelegramIdFailedAction } from '../actions/call-get-user-by-telegram-id.failed.action';
import { UsersService } from '../../api-client';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GetUserByTelegramIdEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly usersService: UsersService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetUserByTelegramIdRequestedAction),
            switchMap(action =>
                this.usersService.getUserByTelegramId(action.telegramUserId).pipe(
                    map(response => {
                        return callGetUserByTelegramIdSucceededAction({
                            telegramUserId: action.telegramUserId,
                            response: response,
                        });
                    }),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            callGetUserByTelegramIdFailedAction({
                                telegramUserId: action.telegramUserId,
                                errorCode: error.status,
                                error: error,
                            })
                        )
                    )
                )
            )
        )
    );
}
