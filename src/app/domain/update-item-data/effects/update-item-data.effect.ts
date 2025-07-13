import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callUpdateItemDataRequestedAction } from '../actions/call-update-item-data.requested.action';
import { callUpdateItemDataSucceededAction } from '../actions/call-update-item-data.succeeded.action';
import { callUpdateItemDataFailedAction } from '../actions/call-update-item-data.failed.action';
import { ItemsService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class UpdateItemDataEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly itemsService: ItemsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callUpdateItemDataRequestedAction),
            switchMap(action =>
                this.itemsService.updateItemData({
                    itemId: action.itemId,
                    name: action.name,
                    emoji: action.emoji,
                    quantity: action.quantity,
                    quantityType: action.quantityType as any,
                }).pipe(
                    map(() => {
                        return callUpdateItemDataSucceededAction({
                            itemId: action.itemId,
                            name: action.name,
                            emoji: action.emoji,
                            quantity: action.quantity,
                            quantityType: action.quantityType,
                        });
                    }),
                    catchError(error =>
                        of(
                            callUpdateItemDataFailedAction({
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