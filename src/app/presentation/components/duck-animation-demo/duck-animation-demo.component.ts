import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDuckComponent } from '../../shared/components/loading-duck';
import { MatCardModule } from '@angular/material/card';

export interface DuckAnimation {
    type: 'swimming' | 'jumping' | 'dancing' | 'spinning' | 'flapping';
    name: string;
    description: string;
}

@Component({
    selector: 'app-duck-animation-demo',
    standalone: true,
    imports: [CommonModule, LoadingDuckComponent, MatCardModule],
    templateUrl: './duck-animation-demo.component.html',
    styleUrl: './duck-animation-demo.component.less',
})
export class DuckAnimationDemoComponent {
    duckAnimations: DuckAnimation[] = [
        {
            type: 'swimming',
            name: 'Schwimmende Ente',
            description: 'Eine Ente, die hin und her schwimmt',
        },
        { type: 'jumping', name: 'Hüpfende Ente', description: 'Eine Ente, die fröhlich hüpft' },
        { type: 'dancing', name: 'Tanzende Ente', description: 'Eine Ente, die rhythmisch tanzt' },
        {
            type: 'spinning',
            name: 'Drehende Ente',
            description: 'Eine Ente, die sich im Kreis dreht',
        },
        {
            type: 'flapping',
            name: 'Flatternde Ente',
            description: 'Eine Ente, die mit den Flügeln schlägt',
        },
    ];
}
