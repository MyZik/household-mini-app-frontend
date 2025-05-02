import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoryItem {
  id: number;
  name: string;
  emoji: string;
  quantity: number;
}

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.less'
})
export class CategoryItemComponent {
  @Input() item!: CategoryItem;
} 