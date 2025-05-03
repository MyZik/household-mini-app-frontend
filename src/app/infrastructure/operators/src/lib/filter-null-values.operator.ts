import { Observable, OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterNullValues<T>(): OperatorFunction<T | null | undefined, T> {
    return (source$: Observable<T | null | undefined>): Observable<T> => {
        return source$.pipe(
            filter((source: T | null | undefined): source is T => (source ?? null) !== null)
        );
    };
}
