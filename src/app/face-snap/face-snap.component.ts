import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = 'Like';
  }

  onSnap() {

    const snapped = 'Unlike';
    const notSnapped = 'Like';

    if (this.buttonText === snapped) {
      this.faceSnap.snaps--;
      this.buttonText = notSnapped;
    } else {
      this.faceSnap.snaps++;
      this.buttonText = snapped;
    }

  }
}
