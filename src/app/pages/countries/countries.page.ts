import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,       // ✅ Added for back button container
  IonBackButton,    // ✅ Added for actual back button
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,     // ✅ required for <ion-buttons>
    IonBackButton,  // ✅ required for <ion-back-button>
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAvatar
  ]
})
export class CountriesPage implements OnInit {
  searchQuery: string = '';
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    console.log('✅ CountriesPage loaded');
  }

  searchCountries() {
    console.log('🔍 Search triggered for:', this.searchQuery);

    const encodedQuery = encodeURIComponent(this.searchQuery.trim());

    if (encodedQuery !== '') {
      this.countryService.searchCountries(encodedQuery).subscribe(
        (data) => {
          this.countries = data;
          console.log('🌍 Countries data:', data);
        },
        (error) => {
          console.error('❌ Error fetching countries:', error);
          this.countries = [];
        }
      );
    }
  }
}
