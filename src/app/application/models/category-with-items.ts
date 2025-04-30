import {Item} from "./item";

export interface CategoryWithItems {
  id: number;
  name: string;
  emoji: string;
  items: Item[];
}
