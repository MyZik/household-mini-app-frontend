import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callCreateItemRequestedAction } from '../actions/call-create-item.requested.action';
import { callCreateItemSucceededAction } from '../actions/call-create-item.succeeded.action';
import { callCreateItemFailedAction } from '../actions/call-create-item.failed.action';
import { CreateItem201Response, ItemsService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class CreateItemEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly itemsService: ItemsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateItemRequestedAction),
            switchMap(action =>
                this.itemsService
                    .createItem({
                        householdId: action.householdId,
                        categoryId: action.categoryId,
                        userId: action.userId,
                        name: action.name,
                        emoji: action.emoji,
                        quantity: action.quantity,
                        quantityType: action.quantityType,
                    })
                    .pipe(
                        map((response: CreateItem201Response) => {
                            return callCreateItemSucceededAction({
                                categoryId: action.categoryId,
                                response: response,
                            });
                        }),
                        catchError(error =>
                            of(
                                callCreateItemFailedAction({
                                    error,
                                })
                            )
                        )
                    )
            )
        )
    );
}
