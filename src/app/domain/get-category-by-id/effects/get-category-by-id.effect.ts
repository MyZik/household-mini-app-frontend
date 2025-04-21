import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiClientService } from '../../../infrastructure/http/api-client.service';
import { callGetCategoryByIdRequestedAction } from '../actions/call-get-category-by-id.requested.action';
import { callGetCategoryByIdSucceededAction } from '../actions/call-get-category-by-id.succeeded.action';
import { callGetCategoryByIdFailedAction } from '../actions/call-get-category-by-id.failed.action';
import { CategoryDetailResponse } from '../../models';

@Injectable()
export class GetCategoryByIdEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly apiClient: ApiClientService
  ) {}

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callGetCategoryByIdRequestedAction),
      switchMap(({ id }) =>
        this.apiClient.get<CategoryDetailResponse>(`/categories/get-category-by-id/${id}`).pipe(
          map(category => callGetCategoryByIdSucceededAction({
            response: category
          })),
          catchError(error => of(callGetCategoryByIdFailedAction({
            error: error
          })))
        )
      )
    )
  );
}
