import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
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

    this.faceSnap$ = this.faceSnapService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === this.snapped) {
      this.faceSnap$ = this.faceSnapService
        .snapFaceSnapById(faceSnapId, 'Unsnap')
        .pipe(tap(() => (this.buttonText = this.notSnapped)));
    } else {
      this.faceSnap$ = this.faceSnapService
        .snapFaceSnapById(faceSnapId, 'Snap')
        .pipe(tap(() => (this.buttonText = this.snapped)));
    }
  }
}
