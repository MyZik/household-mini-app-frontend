import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-error-message',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './error-message.component.html',
    styleUrl: './error-message.component.less',
})
export class ErrorMessageComponent {
    @Input() message: string = 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
    @Input() showRetryButton: boolean = false;
    @Output() retry = new EventEmitter<void>();

    onRetry(): void {
        this.retry.emit();
    }
}
