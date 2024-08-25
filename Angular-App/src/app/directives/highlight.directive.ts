import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(public el:ElementRef) { }

  @HostBinding("style.backgroundColor")
  bgColor = 'red'

  @HostListener('mouseenter')
  mouseEnter(){
    this.el.nativeElement.style.fontSize = '50px'
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.el.nativeElement.style.fontSize = '30px'
  }
}
