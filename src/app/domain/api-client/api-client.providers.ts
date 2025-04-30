import {importProvidersFrom} from '@angular/core';
import {ApiModule, Configuration, ConfigurationParameters} from './generated';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiUrl,
  };
  return new Configuration(params);
}

export const API_CLIENT_PROVIDERS = [
  importProvidersFrom(
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory)
  )
];
