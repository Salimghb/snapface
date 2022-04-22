import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  readonly snapped = 'Unlike';
  readonly notSnapped = 'Like';

  ngOnInit(): void {
    this.buttonText = this.notSnapped;
  }

  onSnap() {
    if (this.buttonText === this.snapped) {
      this.faceSnap.snaps--;
      this.buttonText = this.notSnapped;
    } else {
      this.faceSnap.snaps++;
      this.buttonText = this.snapped;
    }
  }
}
