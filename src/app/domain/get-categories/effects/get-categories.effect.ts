import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiClientService } from '../../../infrastructure/http/api-client.service';
import { callGetCategoriesRequestedAction } from '../actions/call-get-categories.requested.action';
import { callGetCategoriesSucceededAction } from '../actions/call-get-categories.succeeded.action';
import { callGetCategoriesFailedAction } from '../actions/call-get-categories.failed.action';
import { CategoryResponse } from '../../models';

@Injectable()
export class GetCategoriesEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly apiClient: ApiClientService
  ) {}

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callGetCategoriesRequestedAction),
      switchMap(() =>
        this.apiClient.get<CategoryResponse[]>('/categories/get-categories').pipe(
          map(response => callGetCategoriesSucceededAction({
            response: response
          })),
          catchError(error => of(callGetCategoriesFailedAction({
            error: error
          })))
        )
      )
    )
  );
}
