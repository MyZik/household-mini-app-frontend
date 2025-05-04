import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { filterNullValues } from '../../../infrastructure/operators/src';
import { callCreateItemSucceededAction } from '../../../domain/create-item/actions/call-create-item.succeeded.action';
import { callGetItemsByCategoryRequestedAction } from '../../../domain/get-items-by-category/actions/call-get-items-by-category.requested.action';
import { userByTelegramIdSelector } from '../../users';

@Injectable()
export class UpdateSingleCategoryOnCreateItemEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateItemSucceededAction),
            withLatestFrom(this.store.select(userByTelegramIdSelector).pipe(filterNullValues())),
            map(([action, user]) =>
                callGetItemsByCategoryRequestedAction({
                    userId: user.userId,
                    householdId: user.settings.defaultHouseholdId,
                    categoryId: action.categoryId,
                })
            )
        )
    );
}
