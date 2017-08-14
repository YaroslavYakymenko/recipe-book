import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  config = {
    apiKey: 'AIzaSyDI6l3Iogx7obVK8djm1sL1bp2REwPUxCs',
    authDomain: 'recipe-book-1c31e.firebaseapp.com',
    databaseURL: 'https://recipe-book-1c31e.firebaseio.com',
    projectId: 'recipe-book-1c31e',
    storageBucket: 'recipe-book-1c31e.appspot.com',
    messagingSenderId: '223670870965'
  };

  ngOnInit(): void {
    firebase.initializeApp(this.config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
