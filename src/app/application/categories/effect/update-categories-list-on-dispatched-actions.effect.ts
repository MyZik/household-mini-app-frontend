import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { bufferTime, filter, map, withLatestFrom } from 'rxjs/operators';
import { userByTelegramIdSelector } from '../../users';
import { filterNullValues } from '../../../infrastructure/operators/src';
import { callCreateCategorySucceededAction } from '../../../domain/create-category/actions/call-create-category.succeeded.action';
import { callGetHouseholdCategoriesRequestedAction } from '../../../domain/get-household-categories';
import { callDeleteCategorySucceededAction } from '../../../domain/delete-category/actions/call-delete-category.succeeded.action';

@Injectable()
export class UpdateCategoriesListOnDispatchedActionsEffect {
    constructor(
        private readonly actions$: Actions,
        private store: Store
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateCategorySucceededAction, callDeleteCategorySucceededAction),
            bufferTime(300),
            filter(actions => actions.length > 0),
            withLatestFrom(this.store.select(userByTelegramIdSelector).pipe(filterNullValues())),
            map(([_actions, user]) =>
                callGetHouseholdCategoriesRequestedAction({
                    userId: user.userId,
                    householdId: user.settings?.defaultHouseholdId,
                })
            )
        )
    );
}
