import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiClientService } from '../../../infrastructure/http/api-client.service';
import { callGetItemsByCategoryRequestedAction } from '../actions/call-get-items-by-category.requested.action';
import { callGetItemsByCategorySucceededAction } from '../actions/call-get-items-by-category.succeeded.action';
import { callGetItemsByCategoryFailedAction } from '../actions/call-get-items-by-category.failed.action';
import { ItemResponse } from '../../models';

@Injectable()
export class GetItemsByCategoryEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly apiClient: ApiClientService
  ) {}

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callGetItemsByCategoryRequestedAction),
      switchMap(({ categoryId }) =>
        this.apiClient.get<ItemResponse[]>(`/items/get-items-by-category/${categoryId}`).pipe(
          map(response => callGetItemsByCategorySucceededAction({
            response: response
          })),
          catchError(error => of(callGetItemsByCategoryFailedAction({
            error: error
          })))
        )
      )
    )
  );
}
