# API-Client Generierung

Dieses Projekt verwendet einen OpenAPI-Generator, um TypeScript-Angular-Clients basierend auf der OpenAPI-Spezifikation zu generieren.

## Voraussetzungen

- Docker und Docker Compose müssen installiert sein
- Der API-Server muss unter http://localhost:8000 laufen und die OpenAPI-Spezifikation unter http://localhost:8000/api/docs.yaml bereitstellen

## Generierung des API-Clients

Um den API-Client zu generieren, führen Sie den folgenden Befehl aus:

```bash
npm run generate-api-client
```

Dieser Befehl:
1. Baut das Docker-Image für den OpenAPI-Generator
2. Führt den Container aus
3. Generiert den TypeScript-Angular-Client in `src/app/domain/api-client/generated`

## Verwendung des generierten API-Clients

Der generierte API-Client kann in den Domain-Effekten verwendet werden. Importieren Sie die benötigten Services und Modelle mit:

```typescript
import { ServiceName, ModelName } from '../../api-client';
```

Beispiel für die Verwendung in einem Effect:

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { YourRequestedAction } from '../actions/your-requested.action';
import { YourSucceededAction } from '../actions/your-succeeded.action';
import { YourFailedAction } from '../actions/your-failed.action';
import { GeneratedApiService } from '../../api-client';

@Injectable()
export class YourEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly apiService: GeneratedApiService
  ) {}

  public readonly effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YourRequestedAction),
      switchMap((action) =>
        this.apiService.apiEndpoint(action.params).pipe(
          map(response => YourSucceededAction({
            response: response
          })),
          catchError(error => of(YourFailedAction({
            error: error
          })))
        )
      )
    )
  );
}
```

## Regenerierung des API-Clients

Wenn sich die API-Spezifikation ändert, führen Sie einfach erneut `npm run generate-api-client` aus, um den Client zu aktualisieren. 