import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-category-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
    ],
    templateUrl: './category-detail.component.html',
    styleUrl: './category-detail.component.less',
})
export class CategoryDetailComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    public category: any;

    // Mock-Daten für die Kategorien
    private mockCategories = [
        {
            id: 1,
            name: 'Obst',
            emoji: '🍎',
            items: [
                { id: 1, categoryId: 1, name: 'Äpfel', emoji: '🍎', quantity: 5 },
                { id: 2, categoryId: 1, name: 'Bananen', emoji: '🍌', quantity: 3 },
                { id: 3, categoryId: 1, name: 'Orangen', emoji: '🍊', quantity: 4 },
            ],
        },
        {
            id: 2,
            name: 'Gemüse',
            emoji: '🥦',
            items: [
                { id: 4, categoryId: 2, name: 'Brokkoli', emoji: '🥦', quantity: 2 },
                { id: 5, categoryId: 2, name: 'Karotten', emoji: '🥕', quantity: 7 },
                { id: 6, categoryId: 2, name: 'Tomaten', emoji: '🍅', quantity: 6 },
            ],
        },
        {
            id: 3,
            name: 'Getränke',
            emoji: '🥤',
            items: [
                { id: 7, categoryId: 3, name: 'Wasser', emoji: '💧', quantity: 10 },
                { id: 8, categoryId: 3, name: 'Saft', emoji: '🧃', quantity: 4 },
                { id: 9, categoryId: 3, name: 'Limonade', emoji: '🥤', quantity: 3 },
            ],
        },
    ];

    public ngOnInit(): void {
        const categoryId = Number(this.route.snapshot.paramMap.get('id'));
        if (!isNaN(categoryId)) {
            // In einer realen Anwendung:
            // this.categoryService.loadCategoryById(categoryId);

            // Für den Prototyp verwenden wir Mock-Daten
            this.category = this.mockCategories.find(c => c.id === categoryId) || null;
        }
    }

    public goBack(): void {
        window.history.back();
    }
}
