import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // 원격서버에 REST Api를 호출해서 데이터 획득
    return of(HEROES);
  }
}
