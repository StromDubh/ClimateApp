import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    CommonModule,
    FormsModule,
  ],
})
export class WeatherPage implements OnInit {
  country: string = '';
  weather: any = null;
  error: string = '';
  unit: string = 'metric'; // Store selected unit

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';
      this.unit = localStorage.getItem('unit') || 'metric';

      if (this.country) {
        this.fetchWeather(this.country);
      }
    });
  }

  fetchWeather(city: string) {
    this.weatherService.getWeather(city, this.unit).subscribe(
      (data) => {
        this.weather = data;
        this.error = '';
      },
      (error) => {
        console.error('❌ Weather error:', error);
        this.weather = null;
        this.error = 'Unable to fetch weather data.';
      }
    );
  }

  getUnitSymbol(): string {
    return this.unit === 'imperial' ? 'F' : 'C';
  }
}
