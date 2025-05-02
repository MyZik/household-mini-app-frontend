import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callGetHouseholdCategoriesRequestedAction } from '../actions/call-get-household-categories.requested.action';
import { callGetHouseholdCategoriesSucceededAction } from '../actions/call-get-household-categories.succeeded.action';
import { callGetHouseholdCategoriesFailedAction } from '../actions/call-get-household-categories.failed.action';
import { HouseholdsService } from '../../api-client';
import { of } from 'rxjs';

@Injectable()
export class GetHouseholdCategoriesEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly householdService: HouseholdsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetHouseholdCategoriesRequestedAction),
            switchMap(action =>
                this.householdService
                    .getHouseholdCategories({
                        householdId: action.householdId,
                        userId: action.userId,
                    })
                    .pipe(
                        map(response => {
                            return callGetHouseholdCategoriesSucceededAction({
                                householdId: action.householdId,
                                response: response,
                            });
                        }),
                        catchError(error =>
                            of(
                                callGetHouseholdCategoriesFailedAction({
                                    householdId: action.householdId,
                                    error: error,
                                })
                            )
                        )
                    )
            )
        )
    );
}
