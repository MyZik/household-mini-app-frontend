import { CreateCategoryResponse } from "../../api-client/generated";

export type CreateCategoryState = 'not-submitted' | 'submitting' | 'submit-failed' | CreateCategoryResponse; 