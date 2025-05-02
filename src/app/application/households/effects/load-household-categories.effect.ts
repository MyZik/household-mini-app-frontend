import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { loadHouseholdDataRequestedAction } from '../actions/load-household-data-requested.action';
import { callGetHouseholdCategoriesRequestedAction } from '../../../domain/get-household-categories';

@Injectable()
export class LoadHouseholdCategoriesEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadHouseholdDataRequestedAction),
            map(action =>
                callGetHouseholdCategoriesRequestedAction({
                    householdId: action.householdId,
                    userId: action.userId,
                })
            )
        )
    );
}
