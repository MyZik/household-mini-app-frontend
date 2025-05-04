import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TelegramWebApp } from '@m1cron-labs/ng-telegram-mini-app';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './presentation/services/theme.service';
import { Store } from '@ngrx/store';
import {
    callGetUserByTelegramIdRequestedAction,
    getUserByTelegramIdFeatureSelector,
} from './domain/get-user-by-telegram-id';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { userByTelegramIdLoadStatusSelector, userByTelegramIdSelector } from './application/users';
import { callCreateUserFromTelegramRequestedAction } from './domain/create-user-from-telegram';
import { createUserFromTelegramSubmitStatusSelector } from './application/users/selectors/create-user-from-telegram-submit-status.selector';
import {
    ErrorMessageComponent,
    LoadingDuckComponent,
    WelcomeComponent,
} from './presentation/shared/components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        CommonModule,
        LoadingDuckComponent,
        WelcomeComponent,
        ErrorMessageComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent implements OnInit, OnDestroy {
    private readonly telegram = inject(TelegramWebApp);
    private readonly themeService = inject(ThemeService);

    public isDarkTheme = false;

    protected backendUserData = this.store.selectSignal(getUserByTelegramIdFeatureSelector);
    protected userDataLoadStatus = this.store.selectSignal(userByTelegramIdLoadStatusSelector);
    protected userData = this.store.selectSignal(userByTelegramIdSelector);
    protected createUserStatus = this.store.selectSignal(
        createUserFromTelegramSubmitStatusSelector
    );

    user = this.telegram.initDataUnsafe?.user;

    private readonly defaultTelegramUserId = 150142952;

    constructor(private store: Store) {
        this.telegram.ready();
    }

    ngOnInit() {
        this.setupTelegramTheme();

        this.themeService.darkTheme$.subscribe(isDark => {
            this.isDarkTheme = isDark;
        });

        this.store.dispatch(
            callGetUserByTelegramIdRequestedAction({
                telegramUserId: this.telegram.initDataUnsafe.user?.id || this.defaultTelegramUserId,
            })
        );

        console.log('Init data', this.telegram.initData);
    }

    ngOnDestroy(): void {
        this.telegram.close();
    }

    private setupTelegramTheme(): void {
        if (this.telegram.colorScheme === 'dark') {
            this.themeService.setTheme(true);
        }
    }

    closeApp(): void {
        this.telegram.close();
    }

    public toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    createAccount(): void {
        const user = this.telegram.initDataUnsafe.user;

        if (user) {
            this.store.dispatch(
                callCreateUserFromTelegramRequestedAction({
                    telegramUserId: user.id || this.defaultTelegramUserId,
                    isBot: user.is_bot || false,
                    firstName: user.first_name || 'Unbekannt',
                    lastName: user.last_name || null,
                    username: user.username || null,
                    languageCode: user.language_code || 'de',
                    isPremium: user.is_premium || false,
                    addedToAttachmentMenu: user.added_to_attachment_menu || false,
                    allowsWriteToPm: user.allows_write_to_pm || false,
                    photoUrl: user.photo_url || null,
                })
            );
        } else {
            // Fallback für Test/Entwicklung ohne echte Telegram-Daten
            this.store.dispatch(
                callCreateUserFromTelegramRequestedAction({
                    telegramUserId: this.defaultTelegramUserId,
                    isBot: false,
                    firstName: 'Test',
                    lastName: 'User',
                    username: 'testuser',
                    languageCode: 'de',
                    isPremium: false,
                    addedToAttachmentMenu: false,
                    allowsWriteToPm: false,
                    photoUrl: null,
                })
            );
        }
    }
}
