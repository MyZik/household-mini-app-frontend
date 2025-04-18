import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TelegramWebApp} from "@m1cron-labs/ng-telegram-mini-app";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly telegram = inject(TelegramWebApp);

  user = this.telegram.initDataUnsafe?.user;

  constructor() {
    this.telegram.ready();
  }

  ngOnInit() {
    console.debug('Telegram Web App is ready', this.telegram.initDataUnsafe);
  }

  ngOnDestroy(): void {
    this.telegram.close();
  }

  closeApp(): void {
    this.telegram.close();
  }
}
