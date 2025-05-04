import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callDeleteItemRequestedAction } from '../actions/call-delete-item.requested.action';
import { callDeleteItemSucceededAction } from '../actions/call-delete-item.succeeded.action';
import { callDeleteItemFailedAction } from '../actions/call-delete-item.failed.action';
import { ItemsService } from '../../api-client';
import { of } from 'rxjs';

@Injectable()
export class DeleteItemEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly itemsService: ItemsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callDeleteItemRequestedAction),
            switchMap(action => {
                return this.itemsService.deleteItem(action.itemId).pipe(
                    map(() => {
                        return callDeleteItemSucceededAction({
                            itemId: action.itemId,
                        });
                    }),
                    catchError(error =>
                        of(
                            callDeleteItemFailedAction({
                                itemId: action.itemId,
                                error: error,
                            })
                        )
                    )
                );
            })
        )
    );
}
