import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callCreateUserFromTelegramRequestedAction } from '../actions/call-create-user-from-telegram.requested.action';
import { callCreateUserFromTelegramSucceededAction } from '../actions/call-create-user-from-telegram.succeeded.action';
import { callCreateUserFromTelegramFailedAction } from '../actions/call-create-user-from-telegram.failed.action';
import { UsersService, CreateUserFromTelegramResponseBody } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class CreateUserFromTelegramEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly usersService: UsersService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateUserFromTelegramRequestedAction),
            switchMap(action =>
                this.usersService
                    .createUserFromTelegram({
                        telegramUserId: action.telegramUserId,
                        isBot: action.isBot,
                        firstName: action.firstName,
                        lastName: action.lastName,
                        username: action.username,
                        languageCode: action.languageCode,
                        isPremium: action.isPremium,
                        addedToAttachmentMenu: action.addedToAttachmentMenu,
                        allowsWriteToPm: action.allowsWriteToPm,
                        photoUrl: action.photoUrl,
                    })
                    .pipe(
                        map((response: CreateUserFromTelegramResponseBody) => {
                            return callCreateUserFromTelegramSucceededAction({
                                telegramUserId: action.telegramUserId,
                                response: response,
                            });
                        }),
                        catchError(error =>
                            of(
                                callCreateUserFromTelegramFailedAction({
                                    error,
                                })
                            )
                        )
                    )
            )
        )
    );
}
