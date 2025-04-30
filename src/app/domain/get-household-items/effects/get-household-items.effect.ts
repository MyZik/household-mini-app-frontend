import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {callGetHouseholdItemsRequestedAction} from '../actions/call-get-household-items.requested.action';
import {callGetHouseholdItemsSucceededAction} from '../actions/call-get-household-items.succeeded.action';
import {callGetHouseholdItemsFailedAction} from '../actions/call-get-household-items.failed.action';
import {HouseholdsService} from '../../api-client/generated';
import {of} from 'rxjs';

@Injectable()
export class GetHouseholdItemsEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly householdService: HouseholdsService
  ) {
  }

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callGetHouseholdItemsRequestedAction),
      switchMap((action) =>
        this.householdService.getHouseholdItems(action.householdId).pipe(
          map((response) => {
            return callGetHouseholdItemsSucceededAction({
              householdId: action.householdId,
              response: response
            });
          }),
          catchError(error => of(callGetHouseholdItemsFailedAction({
            householdId: action.householdId,
            error
          })))
        )
      )
    )
  );
}
