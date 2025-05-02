import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callGetHouseholdByIdRequestedAction } from '../actions/call-get-household-by-id.requested.action';
import { callGetHouseholdByIdSucceededAction } from '../actions/call-get-household-by-id.succeeded.action';
import { callGetHouseholdByIdFailedAction } from '../actions/call-get-household-by-id.failed.action';
import { GetHouseholdByIdResponse, HouseholdsService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class GetHouseholdByIdEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly householdService: HouseholdsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callGetHouseholdByIdRequestedAction),
            switchMap(action =>
                this.householdService.getHouseholdById(action.id).pipe(
                    map((response: GetHouseholdByIdResponse) => {
                        return callGetHouseholdByIdSucceededAction({
                            id: action.id,
                            response: response,
                        });
                    }),
                    catchError(error =>
                        of(
                            callGetHouseholdByIdFailedAction({
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
