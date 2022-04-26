import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from './../models/face-snap.model';
import { FaceSnapsService } from './../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  readonly snapped = 'Unlike';
  readonly notSnapped = 'Like';

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buttonText = this.notSnapped;
    const snapId = +this.route.snapshot.params['id'];

    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === this.snapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'Unsnap');
      this.buttonText = this.notSnapped;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'Snap');
      this.buttonText = this.snapped;
    }
  }
}
