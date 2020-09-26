import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementosService {
  constructor(private firestore: AngularFirestore) {}

  createElements(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('elementos')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  getElements() {
    return this.firestore
      .collection('elementos')
      .ref.where('isActive', '==', true);
    // .onSnapshot((snapshot) => {
    //    snapshot.docs.map((element: any) => {
    //      this.elementos.push({
    //        id: element.id,
    //        data: element.data(),
    //      });
    //    });
    // });
  }

  deleteElement(targetElement) {
    this.firestore
      .collection('elementos')
      .doc(targetElement)
      .update({ isActive: false });
  }

  modifyElement(targetElement) {
    console.log(targetElement);
    this.firestore.collection('elementos').doc(targetElement.id).update({
      name: targetElement.data.name,
      manufacturer: targetElement.data.manufacturer,
      photo: targetElement.data.photo,
    });
  }
}
