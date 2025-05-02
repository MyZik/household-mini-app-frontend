import { Routes } from '@angular/router';
import { CategoryListComponent } from './presentation/components/category-list/category-list.component';
import { CategoryDetailComponent } from './presentation/components/category-detail/category-detail.component';
import { DuckAnimationDemoComponent } from './presentation/components/duck-animation-demo/duck-animation-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    },
    {
        path: 'category/:id',
        component: CategoryDetailComponent,
    },
    {
        path: 'duck-demo',
        component: DuckAnimationDemoComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
