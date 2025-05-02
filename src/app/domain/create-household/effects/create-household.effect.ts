import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { callCreateHouseholdRequestedAction } from '../actions/call-create-household.requested.action';
import { callCreateHouseholdSucceededAction } from '../actions/call-create-household.succeeded.action';
import { callCreateHouseholdFailedAction } from '../actions/call-create-household.failed.action';
import { CreateHouseholdResponse, HouseholdsService } from '../../api-client/generated';
import { of } from 'rxjs';

@Injectable()
export class CreateHouseholdEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly householdService: HouseholdsService
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(callCreateHouseholdRequestedAction),
            switchMap(action =>
                this.householdService
                    .createHousehold({
                        createdBy: action.createdBy,
                        name: action.name,
                    })
                    .pipe(
                        map((response: CreateHouseholdResponse) => {
                            return callCreateHouseholdSucceededAction({
                                response: response,
                            });
                        }),
                        catchError(error =>
                            of(
                                callCreateHouseholdFailedAction({
                                    error,
                                })
                            )
                        )
                    )
            )
        )
    );
}
