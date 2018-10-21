import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


// const firebaseConfig1 = {
//   firebaseConfig: {
//     apiKey: 'AIzaSyA8xQxEKXlwGvrV-V2EJ2sHpnHkYG21CUU',
//     authDomain: 'employee-edd62.firebaseapp.com',
//     databaseURL: 'https://employee-edd62.firebaseio.com',
//     projectId: 'employee-edd62',
//     storageBucket: '',
//     messagingSenderId: '437422254907'
//   }
// };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // this.initializeApp();
  }

  // initializeApp() {
  //   AngularFireModule.initializeApp(firebaseConfig1);
  // }

}

