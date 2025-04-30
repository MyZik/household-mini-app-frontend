import { GetCategoryByIdResponse } from "../../api-client/generated";

export type GetCategoryByIdState = 'not-loaded' | 'loading' | 'load-failed' | GetCategoryByIdResponse; 