import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callCreateCategoryRequestedAction } from '../actions/call-create-category.requested.action';
import { callCreateCategorySucceededAction } from '../actions/call-create-category.succeeded.action';
import { callCreateCategoryFailedAction } from '../actions/call-create-category.failed.action';
import { CategoriesService, CreateCategoryResponse } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class CreateCategoryEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly categoriesService: CategoriesService
  ) {}

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callCreateCategoryRequestedAction),
      switchMap((action) =>
        this.categoriesService.createCategory({
          householdId: action.householdId,
          name: action.name,
          emoji: action.emoji
        }).pipe(
          map((response: CreateCategoryResponse) => {
            return callCreateCategorySucceededAction({
              response
            });
          }),
          catchError(error => of(callCreateCategoryFailedAction({
            error
          })))
        )
      )
    )
  );
} 