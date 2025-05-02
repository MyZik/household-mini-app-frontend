import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./presentation/components/category-list/category-list.component').then(m => m.CategoryListComponent),
    },
    {
        path: 'category/:id',
        loadComponent: () => import('./presentation/components/category-detail/category-detail.component').then(m => m.CategoryDetailComponent),
    },
    {
        path: 'duck-demo',
        loadComponent: () => import('./presentation/components/duck-animation-demo/duck-animation-demo.component').then(m => m.DuckAnimationDemoComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
