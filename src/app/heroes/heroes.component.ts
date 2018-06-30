import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };

  isSpecial = false;

  heroes = HEROES;

  selectedHero: Hero; // 디테일 뷰를 렌더링 하기 위한 모델 정보

  constructor() { }

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
  }
}
