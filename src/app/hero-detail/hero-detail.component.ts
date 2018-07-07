import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  selectedHero: Hero; // 디테일 뷰를 렌더링 하기 위한 모델 정보

  constructor() { }

  ngOnInit() {
  }

}
