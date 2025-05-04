import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createItemFormSubmittedAction } from '../actions/create-item-form-submitted.action';
import { map, withLatestFrom } from 'rxjs/operators';
import { callCreateItemRequestedAction } from '../../../domain/create-item/actions/call-create-item.requested.action';
import { Store } from '@ngrx/store';
import { userByTelegramIdSelector } from '../../users';
import { filterNullValues } from '../../../infrastructure/operators/src';

@Injectable()
export class CreateItemRequestedEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createItemFormSubmittedAction),
            withLatestFrom(this.store.select(userByTelegramIdSelector).pipe(filterNullValues())),
            map(([action]) => {
                return callCreateItemRequestedAction({
                    categoryId: action.categoryId,
                    name: action.name,
                    emoji: action.emoji,
                    quantity: 1,
                    quantityType: action.quantityType as any,
                });
            })
        )
    );
}
