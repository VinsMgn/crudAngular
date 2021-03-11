import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map} from "rxjs/operators";
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  
  BASE_URL = 'https://api-eu-central-1.graphcms.com/v2/cki5qwxmbl51b01xp0xkh4amp/master';

  constructor(private client: HttpClient) { }

 /* getFestivals() {
    return this.client.post(this.BASE_URL,

     `
        query MyQuery {
  
            FestivalWis3 {
              artiste
              date
              heure
              scene
              style
            }
          }
          
          `)}
}

*/

getFestivals() {
    return this.client.post(this.BASE_URL, {
      query: `
  
      query {
            festivalWis3 {
                artiste
                date
                heure
                scene
                image{
                  height
                  width
                  url
                }
              }
            }
            `
    }).pipe(map((r: any) => r.data));
  }
}
console.log(Image)