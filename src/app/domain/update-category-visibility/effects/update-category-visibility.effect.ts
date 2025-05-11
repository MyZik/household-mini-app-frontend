import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { callUpdateCategoryVisibilityRequestedAction } from '../actions/call-update-category-visibility.requested.action';
import { callUpdateCategoryVisibilitySucceededAction } from '../actions/call-update-category-visibility.succeeded.action';
import { callUpdateCategoryVisibilityFailedAction } from '../actions/call-update-category-visibility.failed.action';
import { CategoriesService } from '../../api-client';
import { of } from 'rxjs';

@Injectable()
export class UpdateCategoryVisibilityEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly categoriesService: CategoriesService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callUpdateCategoryVisibilityRequestedAction),
            mergeMap(action =>
                this.categoriesService
                    .updateCategoryVisibility({
                        categoryId: action.categoryId,
                        isVisible: action.isVisible,
                    })
                    .pipe(
                        map(response => {
                            return callUpdateCategoryVisibilitySucceededAction({
                                categoryId: action.categoryId,
                                response: response,
                            });
                        }),
                        catchError(error =>
                            of(
                                callUpdateCategoryVisibilityFailedAction({
                                    categoryId: action.categoryId,
                                    error: error,
                                })
                            )
                        )
                    )
            )
        )
    );
}
