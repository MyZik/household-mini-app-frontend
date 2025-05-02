import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { loadHouseholdDataRequestedAction } from '../actions/load-household-data-requested.action';
import { callGetHouseholdItemsRequestedAction } from '../../../domain/get-household-items';

@Injectable()
export class LoadHouseholdItemsEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadHouseholdDataRequestedAction),
            map(action =>
                callGetHouseholdItemsRequestedAction({
                    householdId: action.householdId,
                    userId: action.userId,
                })
            )
        )
    );
}
