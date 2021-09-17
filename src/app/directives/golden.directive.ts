import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGolden]'
})
export class GoldenDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'gold';
   }

}
