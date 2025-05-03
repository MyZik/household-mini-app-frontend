import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { callGetUserByTelegramIdRequestedAction } from '../../../domain/get-user-by-telegram-id';
import { callCreateUserFromTelegramSucceededAction } from '../../../domain/create-user-from-telegram/actions/call-create-user-from-telegram.succeeded.action';

@Injectable()
export class LoadUserDataOnCreateUserSuccessEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateUserFromTelegramSucceededAction),
            map(action =>
                callGetUserByTelegramIdRequestedAction({
                    telegramUserId: action.telegramUserId,
                })
            )
        )
    );
}
