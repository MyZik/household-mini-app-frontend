import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TelegramWebApp} from "@m1cron-labs/ng-telegram-mini-app";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
    
    // Anpassung der UI für das Telegram Web App
    this.setupTelegramTheme();
  }

  ngOnDestroy(): void {
    this.telegram.close();
  }

  private setupTelegramTheme(): void {
    const root = document.documentElement;
    
    // Setze Theme-Variablen basierend auf dem Telegram Theme
    if (this.telegram.colorScheme === 'dark') {
      root.style.setProperty('--background-color', '#212121');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--card-background', '#2c2c2c');
    } else {
      root.style.setProperty('--background-color', '#f5f5f5');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--card-background', '#ffffff');
    }
    
    // Setze die Akzentfarbe basierend auf Telegram's Theme
    if (this.telegram.themeParams) {
      root.style.setProperty('--accent-color', this.telegram.themeParams.button_color || '#2481cc');
    }
  }

  closeApp(): void {
    this.telegram.close();
  }
}
