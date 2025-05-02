import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.less'
})
export class WelcomeComponent {
  @Output() createAccount = new EventEmitter<void>();
  @Output() closeApp = new EventEmitter<void>();

  onCreateAccount(): void {
    this.createAccount.emit();
  }

  onCloseApp(): void {
    this.closeApp.emit();
  }
} 