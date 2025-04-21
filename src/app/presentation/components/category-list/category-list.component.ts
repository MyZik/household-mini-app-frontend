import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../application/services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CategoryDetailResponse } from '../../../domain/models/category.model';
import { ItemResponse } from '../../../domain/models/item.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatExpansionModule, 
    MatCardModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.less'
})
export class CategoryListComponent implements OnInit {
  // Mock-Daten für die Kategorien
  public categories: CategoryDetailResponse[] = [
    {
      id: 1,
      name: 'Obst',
      emoji: '🍎',
      items: [
        { id: 1, categoryId: 1, name: 'Äpfel', emoji: '🍎', quantity: 5 },
        { id: 2, categoryId: 1, name: 'Bananen', emoji: '🍌', quantity: 3 },
        { id: 3, categoryId: 1, name: 'Orangen', emoji: '🍊', quantity: 4 }
      ]
    },
    {
      id: 2,
      name: 'Gemüse',
      emoji: '🥦',
      items: [
        { id: 4, categoryId: 2, name: 'Brokkoli', emoji: '🥦', quantity: 2 },
        { id: 5, categoryId: 2, name: 'Karotten', emoji: '🥕', quantity: 7 },
        { id: 6, categoryId: 2, name: 'Tomaten', emoji: '🍅', quantity: 6 }
      ]
    },
    {
      id: 3,
      name: 'Getränke',
      emoji: '🥤',
      items: [
        { id: 7, categoryId: 3, name: 'Wasser', emoji: '💧', quantity: 10 },
        { id: 8, categoryId: 3, name: 'Saft', emoji: '🧃', quantity: 4 },
        { id: 9, categoryId: 3, name: 'Limonade', emoji: '🥤', quantity: 3 }
      ]
    }
  ];

  // Speichert die IDs der geöffneten Panels
  public expandedPanels: Set<number> = new Set<number>();

  constructor(private readonly categoryService: CategoryService) {}

  public ngOnInit(): void {
    // In einer realen Anwendung würden wir hier die Daten vom Service laden
    // this.categoryService.loadAllCategories();
  }

  // Kategorie auf- oder zuklappen
  public togglePanel(categoryId: number): void {
    if (this.expandedPanels.has(categoryId)) {
      this.expandedPanels.delete(categoryId);
    } else {
      this.expandedPanels.add(categoryId);
    }
  }

  // Prüfen, ob eine Kategorie geöffnet ist
  public isPanelExpanded(categoryId: number): boolean {
    return this.expandedPanels.has(categoryId);
  }
}
