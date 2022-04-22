import { FaceSnap } from './models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit(): void {
    this.mySnap1 = new FaceSnap(
      'Archibald1',
      'Mon meilleur ami depuis tout petit !1',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.mySnap2 = new FaceSnap(
      'Archibald2',
      'Mon meilleur ami depuis tout petit !2',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.mySnap3 = new FaceSnap(
      'Archibald3',
      'Mon meilleur ami depuis tout petit !3',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }

}
