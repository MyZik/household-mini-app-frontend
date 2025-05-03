import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { loadHouseholdDataRequestedAction } from '../actions/load-household-data-requested.action';
import { callGetUserByTelegramIdSucceededAction } from '../../../domain/get-user-by-telegram-id/actions/call-get-user-by-telegram-id.succeeded.action';

@Injectable()
export class LoadHouseholdDataOnUserDataLoadedEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetUserByTelegramIdSucceededAction),
            map(action =>
                loadHouseholdDataRequestedAction({
                    householdId: action.response.settings.defaultHouseholdId,
                    userId: action.response.userId,
                })
            )
        )
    );
}
