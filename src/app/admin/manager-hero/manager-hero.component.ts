import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../hero.service';

@Component({
  selector: 'app-manager-hero',
  templateUrl: './manager-hero.component.html',
  styleUrls: ['./manager-hero.component.scss']
})
export class ManagerHeroComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
        console.log(this.heroes);
      });
  }

}
