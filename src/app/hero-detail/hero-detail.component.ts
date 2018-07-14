import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  selectedHero: Hero; // 디테일 뷰를 렌더링 하기 위한 모델 정보

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    console.log('hero detail create');
  }

  ngOnInit() {
    console.log('hero detail ngOninit');
    this.route.params.subscribe(data => {
      // {hero_id : "11"}
      console.log(data);
      // + 기호는 문자열을 숫자로 변환시킨다.
      const param = +data['hero_id'];
      this.heroService.getHero(param)
        .subscribe((body: Hero) => {
          this.selectedHero = body;
          console.log(this.selectedHero);
        });
      // 변경된 데이터를 부모에게 전달
      this.heroService.refresh.next(param);
    });
  }

  goBack() {
    history.back();
  }
}
