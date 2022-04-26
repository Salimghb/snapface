import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

  private myFaceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 3,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 4,
      location: 'In the mountains 😉',
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 1,
    },
  ];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'Snap' | 'Unsnap'
  ): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((fsnap) => ({
        ...fsnap,
        snaps: fsnap.snaps + (snapType === 'Snap' ? 1 : -1),
      })),
      switchMap((updatedFSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFSnap
        )
      )
    );
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      // Tri par ID croissant
      map((faceSnaps) => [...faceSnaps].sort((fs1, fs2) => fs1.id - fs2.id)),
      // Récupération du plus haut ID (ID_MAX)
      map((sortedFaceSnaps) => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      // Création d'un nouveau FS avec un id = ID_MAX + 1
      map((previousFaceSnap) => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnap.id + 1,
      })),
      // Appel POST pour création
      switchMap((newFaceSnap) =>
        this.http.post<FaceSnap>(
          `http://localhost:3000/facesnaps/`,
          newFaceSnap
        )
      )
    );
  }
}
