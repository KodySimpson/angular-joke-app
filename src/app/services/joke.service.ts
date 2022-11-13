import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  getRandomJoke(): Observable<any> {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
