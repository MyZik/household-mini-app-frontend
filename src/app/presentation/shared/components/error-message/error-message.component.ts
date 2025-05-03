import { Component, EventEmitter, input, Input, Output } from '@angular/core';
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
    public message = input<string>('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    public suggestion = input<string | null>(null);
    public showRetryButton = input<boolean>(false);
    @Output() retry = new EventEmitter<void>();

    onRetry(): void {
        this.retry.emit();
    }
}
