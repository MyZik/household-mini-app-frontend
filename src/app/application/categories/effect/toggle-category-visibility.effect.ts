import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { toggleCategoryVisibilityIconClickedAction } from '../actions/toggle-category-visibility-icon-clicked.action';
import { callUpdateCategoryVisibilityRequestedAction } from '../../../domain/update-category-visibility';

@Injectable()
export class ToggleCategoryVisibilityEffect {
    constructor(private readonly actions$: Actions) {}

    public readonly effect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(toggleCategoryVisibilityIconClickedAction),
            map(action => {
                return callUpdateCategoryVisibilityRequestedAction({
                    categoryId: action.categoryId,
                    isVisible: action.isVisible,
                });
            })
        )
    );
}
