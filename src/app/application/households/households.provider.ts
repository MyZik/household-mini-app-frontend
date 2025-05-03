import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { householdsSlice } from './households.slice';
import { householdsReducer } from './reducers/households.reducer';
import { LoadHouseholdItemsEffect } from './effects/load-household-items.effect';
import { LoadHouseholdCategoriesEffect } from './effects/load-household-categories.effect';
import { LoadHouseholdDataOnUserDataLoadedEffect } from './effects/load-household-data-on-user-data-loaded.effect';
import { LoadUserDataOnCreateUserSuccessEffect } from './effects/load-user-data-on-create-user-success.effect';

export const HOUSEHOLDS_LAYER_PROVIDERS = [
    provideState(householdsSlice, householdsReducer),

    provideEffects([
        LoadHouseholdItemsEffect,
        LoadHouseholdCategoriesEffect,
        LoadHouseholdDataOnUserDataLoadedEffect,
        LoadUserDataOnCreateUserSuccessEffect,
    ]),
];
