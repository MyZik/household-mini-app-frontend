import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callGetCategoryByIdRequestedAction } from '../actions/call-get-category-by-id.requested.action';
import { callGetCategoryByIdSucceededAction } from '../actions/call-get-category-by-id.succeeded.action';
import { callGetCategoryByIdFailedAction } from '../actions/call-get-category-by-id.failed.action';
import { of } from 'rxjs';
import { CategoriesService, GetCategoryByIdResponse } from '../../api-client';

@Injectable()
export class GetCategoryByIdEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly categoriesService: CategoriesService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetCategoryByIdRequestedAction),
            switchMap(action =>
                this.categoriesService.getCategoryById(action.id).pipe(
                    map((response: GetCategoryByIdResponse) => {
                        return callGetCategoryByIdSucceededAction({
                            id: action.id,
                            response: response,
                        });
                    }),
                    catchError(error =>
                        of(
                            callGetCategoryByIdFailedAction({
                                id: action.id,
                                error,
                            })
                        )
                    )
                )
            )
        )
    );
}
