import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
    console.log("Servicio HTTP")
  }

  getPeople(): any {
    return this.http.get('https://swapi.dev/api/people/?format=json');
  }
}

