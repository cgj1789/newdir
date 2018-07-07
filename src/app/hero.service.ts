import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of, Subject} from 'rxjs';
import {Hero} from './hero';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(environment.HOST + '/api/heroes');
    // 원격서버에 REST Api를 호출해서 데이터 획득
    // return of(HEROES);
  }

  // hero_id를 받아서 hero를 return
  getHero(hero_id: number): Hero {
    /*const h = HEROES.find((hero, index, array) => {
      // logic here
      if (hero.hero_id === hero_id) {
        return true;
      } else {
        return false;
      }
    });
    return h;*/
    return HEROES.find(hero => hero.hero_id === hero_id ? true : false);
  }
}
