import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Bootcamp } from '../shared/bootcamp.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private bootcampCollection: AngularFirestoreCollection<Bootcamp>;
  private bootcamps: Observable<Bootcamp[]>;

  constructor(db: AngularFirestore, private storage: AngularFireStorage) {

    this.bootcampCollection = db.collection<Bootcamp>('bootcamps');
    this.bootcamps = this.bootcampCollection.snapshotChanges().pipe( map ( actions => {
      return actions.map( dat => {
        const data = dat.payload.doc.data();
        const id =  dat.payload.doc.id;
        return {id, ...data};
      });
  }));
   }


   public getAllbootcamps(){

    return this.bootcamps;
  }
}
