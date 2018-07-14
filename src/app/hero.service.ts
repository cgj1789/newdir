import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Hero} from './hero';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVo} from './domain/todo.vo';

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

  /**
   * hero_id를 받아서 hero를 리턴
   * @param {number} hero_id
   * @returns {Observable<Hero>}
   */
  getHero(hero_id: number): Observable<Hero> {
    /*const h = HEROES.find((hero, index, array) => {
      // logic here
      if (hero.hero_id === hero_id) {
        return true;
      } else {
        return false;
      }
    });
    return h;*/
      // return HEROES.find(hero => hero.hero_id === hero_id ? true : false);
    // es6의 템플릿 스트링 문법: 빽틱 사이에 ${} ex : `xxxx ${자바스크립트 변수}`
    return this.http.get<Hero>(`${environment.HOST}/api/hero/${hero_id}`);
  }

  getTodoList(): Observable<TodoVo[]> {
    return this.http.get<TodoVo[]>(`${environment.HOST}/api/todo`);
  }

  addTodo(todo: TodoVo): Observable<TodoVo> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<TodoVo>(`${environment.HOST}/api/todo`, todo, {headers: headers});
  }
}
