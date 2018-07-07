import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

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

  heroes: Hero[];

  selectedHero: Hero; // 디테일 뷰를 렌더링 하기 위한 모델 정보

  constructor(private heroService: HeroService) {
    // subscriber 역할
    this.heroService.refresh$.subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  onSave(event: any) {
    console.log(event);
  }
}
