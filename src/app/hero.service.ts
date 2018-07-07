import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() {
    // 원격서버에 RESTApi를 호출해서 데이터 획득
    return HEROES;
  }
}
