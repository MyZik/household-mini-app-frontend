import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loading-duck',
    standalone: true,
    imports: [MatProgressSpinnerModule, CommonModule],
    templateUrl: './loading-duck.component.html',
    styleUrl: './loading-duck.component.less',
})
export class LoadingDuckComponent {
    @Input() message: string = 'Daten werden geladen...';
    @Input() duckType: 'swimming' | 'jumping' | 'dancing' | 'spinning' | 'flapping' = 'swimming';
    @Input() spinnerColor: 'primary' | 'accent' | 'warn' = 'accent';
    @Input() spinnerDiameter: number = 50;
}
