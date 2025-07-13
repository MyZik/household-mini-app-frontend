import { LoadingState } from '../../../infrastructure/state/loading-state.type';

export type UpdateItemQuantityState = Record<number, LoadingState>; // ItemId -> LoadingState
 
export const initialUpdateItemQuantityState: UpdateItemQuantityState = {}; 