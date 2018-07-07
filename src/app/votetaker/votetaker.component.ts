import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. Hong', 'Miss. Kim', 'Mr. Lee'];

  constructor() { }

  ngOnInit() {
  }

  // 자식 컴포넌트에 전달한 함수
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
