import {ItemResponse} from "../../models";

export type GetItemsByCategoryState = 'not-loaded' | 'loading' | 'load-failed' | ItemResponse[];
