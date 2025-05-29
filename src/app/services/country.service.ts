import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/name/'; // ✅ Correct API

  constructor(private http: HttpClient) {}

  searchCountries(query: string): Observable<any[]> {
    const encodedQuery = encodeURIComponent(query.trim());
    const url = `${this.apiUrl}${encodedQuery}`;
    return this.http.get<any[]>(url);
  }
}
