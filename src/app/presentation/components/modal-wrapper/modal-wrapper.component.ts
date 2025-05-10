import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal-wrapper.component.html',
    styleUrl: './modal-wrapper.component.less',
})
export class ModalWrapperComponent {
    public readonly isOpen = input<boolean>(false);
    @Output() close = new EventEmitter<void>();

    onBackdropClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
            this.close.emit();
        }
    }
}
