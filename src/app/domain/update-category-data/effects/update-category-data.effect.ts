import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callUpdateCategoryDataRequestedAction } from '../actions/call-update-category-data.requested.action';
import { callUpdateCategoryDataSucceededAction } from '../actions/call-update-category-data.succeeded.action';
import { callUpdateCategoryDataFailedAction } from '../actions/call-update-category-data.failed.action';
import { CategoriesService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class UpdateCategoryDataEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly categoriesService: CategoriesService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callUpdateCategoryDataRequestedAction),
            switchMap(action =>
                this.categoriesService
                    .updateCategory({
                        categoryId: action.categoryId,
                        name: action.name,
                        emoji: action.emoji,
                    })
                    .pipe(
                        map(() => {
                            return callUpdateCategoryDataSucceededAction({
                                categoryId: action.categoryId,
                                name: action.name,
                                emoji: action.emoji,
                            });
                        }),
                        catchError(error =>
                            of(
                                callUpdateCategoryDataFailedAction({
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
