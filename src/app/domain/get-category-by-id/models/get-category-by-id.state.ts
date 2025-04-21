import {CategoryResponse} from "../../models";

export type GetCategoryByIdState = 'not-loaded' | 'loading' | 'load-failed' | CategoryResponse;
