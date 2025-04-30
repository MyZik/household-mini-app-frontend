import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TelegramWebApp} from "@m1cron-labs/ng-telegram-mini-app";
import {RouterOutlet} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {ThemeService} from './presentation/services/theme.service';
import {callGetHouseholdCategoriesRequestedAction} from "./domain/get-household-categories";
import {callGetHouseholdItemsRequestedAction} from "./domain/get-household-items";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly telegram = inject(TelegramWebApp);
  private readonly themeService = inject(ThemeService);

  public isDarkTheme = false;

  user = this.telegram.initDataUnsafe?.user;

  constructor(private store: Store) {
    this.telegram.ready();
  }

  ngOnInit() {
    this.setupTelegramTheme();

    this.themeService.darkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });

    console.log('here!');

    this.store.dispatch(callGetHouseholdCategoriesRequestedAction({householdId: 1}));
    this.store.dispatch(callGetHouseholdItemsRequestedAction({householdId: 1}));
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
}
