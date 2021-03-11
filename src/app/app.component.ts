import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD-CXVUjmPelQriBGzdfNlE8mj-aYsTXZg",
      authDomain: "crud-angular-cba16.firebaseapp.com",
      projectId: "crud-angular-cba16",
      storageBucket: "crud-angular-cba16.appspot.com",
      messagingSenderId: "1034753226854",
      appId: "1:1034753226854:web:855297d0d81c70debed5a7",
      measurementId: "G-RVVSQE55GL"
    };
    // Initialize Firebase
    firebase.default.initializeApp(firebaseConfig);
  }
}
