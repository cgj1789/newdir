import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement : 자바스크립트 노드를 가리킴.
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
