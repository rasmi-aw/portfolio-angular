import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBodyStyle]'
})
export class BodyStyleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "white"
  }

}
