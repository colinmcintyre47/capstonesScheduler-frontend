import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[myTooltip]'
})
export class MyTooltipDirective {
  @Input() csCore: string[] = [];
  @Input() cseElec: string[] = [];

  constructor(private el: ElementRef) { 
    el.nativeElement.classList.add('my-tooltip');
  }

  @HostBinding('title') get tooltipText(): string {
    const classData = this.el.nativeElement.textContent;
    if (this.csCore.includes(classData)) {
      return 'This class is a core course.';
    } else if (this.cseElec.includes(classData)) {
      return 'This class is an elective course.';
    } else {
      return 'This course is not required.';
    }

  }
}