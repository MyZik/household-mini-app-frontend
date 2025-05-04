import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callDeleteCategoryRequestedAction } from '../actions/call-delete-category.requested.action';
import { callDeleteCategorySucceededAction } from '../actions/call-delete-category.succeeded.action';
import { callDeleteCategoryFailedAction } from '../actions/call-delete-category.failed.action';
import { CategoriesService } from '../../api-client';
import { of } from 'rxjs';

@Injectable()
export class DeleteCategoryEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly categoriesService: CategoriesService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callDeleteCategoryRequestedAction),
            switchMap(action => {
                return this.categoriesService.deleteCategory(action.categoryId).pipe(
                    map(() => {
                        return callDeleteCategorySucceededAction({
                            categoryId: action.categoryId,
                        });
                    }),
                    catchError(error =>
                        of(
                            callDeleteCategoryFailedAction({
                                categoryId: action.categoryId,
                                error: error,
                            })
                        )
                    )
                );
            })
        )
    );
}
