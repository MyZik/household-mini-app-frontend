export type UpdateCategoryDataState = Record<
    number,
    'submitting' | 'submit-failed' | 'submit-succeeded'
>;

export const initialUpdateCategoryDataState: UpdateCategoryDataState = {};
