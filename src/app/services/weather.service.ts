import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // ✅ Replace with your actual working OpenWeatherMap API key
  private apiKey = '62faa8a0bf364a18696f3514ddee485a';

  // ✅ Endpoint for getting current weather by city name
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  /**
   * Get current weather for a city
   * @param city - The name of the city or country (e.g., "London", "Ireland")
   * @returns Observable with weather data
   */
 getWeather(city: string, units: string = 'metric'): Observable<any> {
  const encodedCity = encodeURIComponent(city.trim());
  const url = `${this.apiUrl}?q=${encodedCity}&units=${units}&appid=${this.apiKey}`;
  return this.http.get<any>(url);
  }

}
