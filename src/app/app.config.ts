import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { GET_HOUSEHOLD_CATEGORIES_PROVIDERS } from './domain/get-household-categories/get-household-categories.providers';
import { GET_HOUSEHOLD_ITEMS_PROVIDERS } from './domain/get-household-items/get-household-items.providers';
import { GET_HOUSEHOLD_BY_ID_PROVIDERS } from './domain/get-household-by-id/get-household-by-id.providers';
import { CREATE_CATEGORY_PROVIDERS } from './domain/create-category/create-category.providers';
import { CREATE_HOUSEHOLD_PROVIDERS } from './domain/create-household/create-household.providers';
import { GET_CATEGORY_BY_ID_PROVIDERS } from './domain/get-category-by-id/get-category-by-id.providers';
import { API_CLIENT_PROVIDERS } from './domain/api-client/api-client.providers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GET_USER_BY_TELEGRAM_ID_PROVIDERS } from './domain/get-user-by-telegram-id/get-user-by-telegram-id.providers';
import { CREATE_USER_FROM_TELEGRAM_PROVIDERS } from './domain/create-user-from-telegram/create-user-from-telegram.providers';
import { HOUSEHOLDS_LAYER_PROVIDERS } from './application/households/households.provider';
import { CATEGORIES_PROVIDER } from './application/categories/categories.provider';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideStore({}),
        provideEffects(),
        provideAnimations(),

        // Domain
        ...CREATE_CATEGORY_PROVIDERS,
        ...CREATE_HOUSEHOLD_PROVIDERS,
        ...GET_CATEGORY_BY_ID_PROVIDERS,
        ...GET_HOUSEHOLD_BY_ID_PROVIDERS,
        ...GET_HOUSEHOLD_CATEGORIES_PROVIDERS,
        ...GET_HOUSEHOLD_ITEMS_PROVIDERS,
        ...GET_USER_BY_TELEGRAM_ID_PROVIDERS,
        ...CREATE_USER_FROM_TELEGRAM_PROVIDERS,

        // Application
        ...HOUSEHOLDS_LAYER_PROVIDERS,
        ...CATEGORIES_PROVIDER,

        ...API_CLIENT_PROVIDERS,

        importProvidersFrom(
            StoreDevtoolsModule.instrument({
                name: 'Household Mini App for Telegram',
                connectInZone: true,
                maxAge: environment.maxStateAge,
                logOnly: environment.logOnly,
                autoPause: true,
            })
        ),
    ],
};
