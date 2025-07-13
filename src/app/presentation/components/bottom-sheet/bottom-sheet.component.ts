import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface BottomSheetAction {
  id: string;
  label: string;
  icon: string;
  color?: 'primary' | 'danger' | 'warning' | 'default';
  disabled?: boolean;
}

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.less',
})
export class BottomSheetComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() actions: BottomSheetAction[] = [];
  
  @Output() close = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<string>();

  protected onBackdropClick(): void {
    this.close.emit();
  }

  protected onActionClick(actionId: string): void {
    this.actionClick.emit(actionId);
  }

  protected onSheetClick(event: Event): void {
    event.stopPropagation();
  }
} 