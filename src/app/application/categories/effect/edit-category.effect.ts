import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { editCategoryIconClickedAction } from '../actions/edit-category-icon-clicked.action';
import { callUpdateCategoryDataRequestedAction } from '../../../domain/update-category-data';

@Injectable()
export class EditCategoryEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(editCategoryIconClickedAction),
            map(action => {
                return callUpdateCategoryDataRequestedAction({
                    categoryId: action.categoryId,
                    name: action.name,
                    emoji: action.emoji,
                });
            })
        )
    );
}
