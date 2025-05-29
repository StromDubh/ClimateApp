import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonButtons,      
    IonBackButton,   
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonList,
    CommonModule,
    FormsModule
  ]
})
export class SettingsPage {
  unit: string = 'Metric';

  constructor() {
    const savedUnit = localStorage.getItem('unit');
    if (savedUnit) {
      this.unit = savedUnit;
    }
  }

  onUnitChange() {
    localStorage.setItem('unit', this.unit);
    console.log(`Unit changed to: ${this.unit}`);
  }
}
