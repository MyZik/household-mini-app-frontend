import {GetHouseholdItemsResponseBody} from "../../api-client/generated";

export type GetHouseholdItemsState = 'not-loaded' | 'loading' | 'load-failed' | GetHouseholdItemsResponseBody;
