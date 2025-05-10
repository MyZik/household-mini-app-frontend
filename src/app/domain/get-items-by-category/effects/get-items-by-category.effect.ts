import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { callGetItemsByCategoryRequestedAction } from '../actions/call-get-items-by-category.requested.action';
import { callGetItemsByCategorySucceededAction } from '../actions/call-get-items-by-category.succeeded.action';
import { callGetItemsByCategoryFailedAction } from '../actions/call-get-items-by-category.failed.action';
import { of } from 'rxjs';
import { GetItemsByCategory200Response, ItemsService } from '../../api-client/generated';

@Injectable()
export class GetItemsByCategoryEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly itemsService: ItemsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetItemsByCategoryRequestedAction),
            switchMap(actionRequest =>
                this.itemsService.getItemsByCategory(actionRequest.categoryId).pipe(
                    map((response: GetItemsByCategory200Response) => {
                        return callGetItemsByCategorySucceededAction({
                            categoryId: actionRequest.categoryId,
                            response: response,
                        });
                    }),
                    catchError(error => {
                        return of(
                            callGetItemsByCategoryFailedAction({
                                categoryId: actionRequest.categoryId,
                                error,
                            })
                        );
                    })
                )
            )
        )
    );
}
