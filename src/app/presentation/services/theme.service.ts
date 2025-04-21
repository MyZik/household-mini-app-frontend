import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSubject = new BehaviorSubject<boolean>(false);
  public darkTheme$: Observable<boolean> = this.darkThemeSubject.asObservable();
  
  constructor() {
    this.loadThemePreference();
  }
  
  /**
   * Wechselt zwischen Light und Dark Theme
   */
  public toggleTheme(): void {
    const isDarkTheme = !this.darkThemeSubject.value;
    this.setTheme(isDarkTheme);
  }
  
  /**
   * Setzt das Theme auf Light oder Dark
   * @param isDarkTheme True für Dark Theme, False für Light Theme
   */
  public setTheme(isDarkTheme: boolean): void {
    this.darkThemeSubject.next(isDarkTheme);
    
    if (isDarkTheme) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }
    
    // Speichere die Theme-Einstellung
    localStorage.setItem('isDarkTheme', isDarkTheme.toString());
  }
  
  /**
   * Prüft, ob das Dark Theme aktiv ist
   */
  public isDarkTheme(): boolean {
    return this.darkThemeSubject.value;
  }

  /**
   * Lädt die gespeicherte Theme-Einstellung beim Start
   */
  private loadThemePreference(): void {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'true';
      this.darkThemeSubject.next(isDarkTheme);
      
      if (isDarkTheme) {
        this.applyDarkTheme();
      }
    }
  }

  /**
   * Wendet das Dark Theme an
   */
  private applyDarkTheme(): void {
    document.body.classList.add('dark-theme');
  }

  /**
   * Wendet das Light Theme an
   */
  private applyLightTheme(): void {
    document.body.classList.remove('dark-theme');
  }
} 