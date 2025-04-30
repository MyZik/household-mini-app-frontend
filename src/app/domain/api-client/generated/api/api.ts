export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './households.service';
import { HouseholdsService } from './households.service';
export * from './items.service';
import { ItemsService } from './items.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [CategoriesService, HouseholdsService, ItemsService, UsersService];
