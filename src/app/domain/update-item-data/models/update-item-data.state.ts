export type UpdateItemDataState = Record<number, 'not-loaded' | 'loading' | 'load-failed' | 'success'>;

export const initialUpdateItemDataState: UpdateItemDataState = {}; 