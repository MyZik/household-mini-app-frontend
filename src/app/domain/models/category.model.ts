import { ItemResponse } from './item.model';

export interface CategoryResponse {
  id: number;
  name: string;
  emoji: string;
}

export interface CategoryDetailResponse extends CategoryResponse {
  items: ItemResponse[];
} 