import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal-wrapper.component.html',
    styleUrl: './modal-wrapper.component.less',
})
export class ModalWrapperComponent {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    onBackdropClick(event: MouseEvent): void {
        // Nur auf den Backdrop reagieren, nicht wenn auf den Modal-Inhalt geklickt wird
        if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
            this.close.emit();
        }
    }
}
