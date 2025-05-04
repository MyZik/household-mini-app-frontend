import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import { userByTelegramIdSelector } from '../../users';
import { filterNullValues } from '../../../infrastructure/operators/src';
import { callCreateItemSucceededAction } from '../../../domain/create-item/actions/call-create-item.succeeded.action';
import { callGetHouseholdItemsRequestedAction } from '../../../domain/get-household-items';

@Injectable()
export class UpdateItemsListOnCreateItemEffect {
    constructor(
        private readonly actions$: Actions,
        private store: Store
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateItemSucceededAction),
            withLatestFrom(this.store.select(userByTelegramIdSelector).pipe(filterNullValues())),
            map(([_action, user]) =>
                callGetHouseholdItemsRequestedAction({
                    userId: user.userId,
                    householdId: user.settings?.defaultHouseholdId,
                })
            )
        )
    );
}
