import { takeUntil } from 'rxjs/operators';
import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { FaceSnap } from '../models/face-snap.model';
import { interval, tap, Subject } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  myFaceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private myFaceSnapService: FaceSnapsService) { }

  ngOnInit(): void {
    this.myFaceSnaps = this.myFaceSnapService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
