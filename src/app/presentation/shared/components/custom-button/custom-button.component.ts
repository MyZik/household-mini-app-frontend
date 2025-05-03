import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-custom-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.less'],
})
export class CustomButtonComponent {
    @Input() buttonType: 'primary' | 'secondary' = 'primary';
    @Input() text: string = '';
    @Input() disabled: boolean = false;
    @Output() onClick = new EventEmitter<void>();

    handleClick(): void {
        this.onClick.emit();
    }
}
