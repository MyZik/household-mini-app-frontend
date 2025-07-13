import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callUpdateItemQuantityRequestedAction } from '../actions/call-update-item-quantity.requested.action';
import { callUpdateItemQuantitySucceededAction } from '../actions/call-update-item-quantity.succeeded.action';
import { callUpdateItemQuantityFailedAction } from '../actions/call-update-item-quantity.failed.action';
import { ItemsService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class UpdateItemQuantityEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly itemsService: ItemsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callUpdateItemQuantityRequestedAction),
            switchMap(action =>
                this.itemsService.updateItemQuantity({
                    id: action.itemId,
                    quantity: action.quantity,
                    quantityType: action.quantityType,
                }).pipe(
                    map(() => {
                        return callUpdateItemQuantitySucceededAction({
                            itemId: action.itemId,
                            quantity: action.quantity,
                            quantityType: action.quantityType,
                        });
                    }),
                    catchError(error =>
                        of(
                            callUpdateItemQuantityFailedAction({
                                itemId: action.itemId,
                                error: error,
                            })
                        )
                    )
                )
            )
        )
    );
} 