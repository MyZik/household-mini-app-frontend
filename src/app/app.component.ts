import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TelegramWebApp} from "@m1cron-labs/ng-telegram-mini-app";
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './presentation/services/theme.service';

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

  constructor() {
    this.telegram.ready();
  }

  ngOnInit() {
    console.debug('Telegram Web App is ready', this.telegram.initDataUnsafe);
    
    // Anpassung der UI für das Telegram Web App
    this.setupTelegramTheme();
    
    // Abonniere Theme-Änderungen
    this.themeService.darkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  ngOnDestroy(): void {
    this.telegram.close();
  }

  private setupTelegramTheme(): void {
    // Anpassung der UI basierend auf Telegram-Theme
    if (this.telegram.colorScheme === 'dark') {
      this.themeService.setTheme(true);
    }
  }

  closeApp(): void {
    this.telegram.close();
  }

  /**
   * Wechselt zwischen Light und Dark Theme
   */
  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
