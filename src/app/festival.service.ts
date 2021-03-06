import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';
import { map } from "rxjs/operators";
import { query } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { Festival } from './models/festival';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  festivals: Festival[];
  festivalSubject = new Subject<Festival[]>();

  constructor(private client: HttpClient) {
    this.getFestivals();
    
  }

  emitFestival() {
    this.festivalSubject.next(this.festivals);
  }

  saveFestivals() {
    firebase.default.database().ref('/festivals').set(this.festivals);
  }

  getFestivals() {
    firebase.default.database().ref('/festivals').on('value', ((data) => {
      this.festivals = data.val();      
      this.emitFestival();
    }));
  }

  getOneFestival(id: number) {
    return new Promise((resolve, reject) => {
      firebase.default.database().ref('/festivals/' + id).once('value').then((data) => {
        resolve(data.val());
      }).catch((error: any) => {
        reject(error);
      });
    });
  }

  createNewFestival(newFestival: Festival) {
    // this.festivals = []; // A décommenter au tout début pour créer le premier élément (sinon le créer depuis la DB)
    this.festivals.push(newFestival);
    this.saveFestivals();
    this.emitFestival();
  }

  removeFestival(festival: Festival) {
    const festivalIdToRemove = this.festivals.findIndex(
      (festivalE1) => {
        if(festivalE1 === festival) {
          return true;
        }
      }
    );
    this.festivals.splice(festivalIdToRemove, 1);
    this.saveFestivals();
    this.emitFestival();
  }
}
console.log(Image)