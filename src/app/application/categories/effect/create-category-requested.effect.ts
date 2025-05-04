import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { createCategoryFormSubmittedAction } from '../actions/create-category-form-submitted.action';
import { userByTelegramIdSelector } from '../../users';
import { Store } from '@ngrx/store';
import { callCreateCategoryRequestedAction } from '../../../domain/create-category';
import { filterNullValues } from '../../../infrastructure/operators/src';

@Injectable()
export class CreateCategoryRequestedEffect {
    constructor(
        private readonly actions$: Actions,
        private store: Store
    ) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createCategoryFormSubmittedAction),
            withLatestFrom(this.store.select(userByTelegramIdSelector).pipe(filterNullValues())),
            map(([action, user]) =>
                callCreateCategoryRequestedAction({
                    householdId: user.settings?.defaultHouseholdId,
                    name: action.name,
                    emoji: action.emoji,
                })
            )
        )
    );
}
