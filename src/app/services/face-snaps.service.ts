import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
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

  getAllFaceSnaps(): FaceSnap[] {
    return this.myFaceSnaps;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'Snap' | 'Unsnap'): void {
    snapType === 'Snap'
      ? this.getFaceSnapById(faceSnapId).snaps++
      : this.getFaceSnapById(faceSnapId).snaps--;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const facesnap = this.myFaceSnaps.find((fsnap) => fsnap.id === faceSnapId);
    if (facesnap) {
      return facesnap;
    } else {
      throw new Error("Aucun FaceSnap trouvé pour l'id " + faceSnapId);
    }
  }
}
