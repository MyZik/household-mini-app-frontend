import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from './generated';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: '/api',
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
  ],
  exports: [
    ApiModule
  ]
})
export class ApiClientModule { } 