import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private readonly baseUrl = '/api';

  constructor(private readonly http: HttpClient) {}

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  public post<T, R>(endpoint: string, body: T): Observable<R> {
    return this.http.post<R>(`${this.baseUrl}${endpoint}`, body);
  }

  public patch<T, R>(endpoint: string, body: T): Observable<R> {
    return this.http.patch<R>(`${this.baseUrl}${endpoint}`, body);
  }
} 