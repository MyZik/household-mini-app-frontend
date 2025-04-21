import { CategoryResponse } from '../../models';

// export interface GetCategoriesState {
//   categories: CategoryResponse[];
//   loading: boolean;
//   error: any;
// }

export type GetCategoriesState = 'not-loaded' | 'loading' | 'load-failed' | CategoryResponse[];
