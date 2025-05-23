import { Component, EventEmitter, input, Output } from '@angular/core';
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
    public buttonType = input.required<'primary' | 'secondary' | 'accent' | 'outline' | 'flat'>();
    public text = input.required<string>();
    public disabled = input<boolean>(false);
    public type = input<'button' | 'submit' | 'reset'>('button');
    @Output() onClick = new EventEmitter<void>();

    handleClick(): void {
        this.onClick.emit();
    }
}
