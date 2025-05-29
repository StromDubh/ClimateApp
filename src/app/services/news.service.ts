import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '70b672dee9fa497ab759f70472825e4d'
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getCountryNews(country: string): Observable<any> {
    const url = `${this.apiUrl}?q=${country}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
