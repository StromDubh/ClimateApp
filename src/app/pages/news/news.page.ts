import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,      // ✅ required for <ion-buttons>
    IonBackButton,   // ✅ required for <ion-back-button>
    IonList,
    IonItem,
    IonLabel
  ]
})
export class NewsPage implements OnInit {
  country: string = '';
  articles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.country = params['country'] || '';
      if (this.country) {
        this.newsService.getCountryNews(this.country).subscribe(
          (res) => {
            this.articles = res.articles || [];
            console.log('📰 News loaded:', this.articles);
          },
          (err) => {
            console.error('❌ Error fetching news:', err);
          }
        );
      }
    });
  }
}
