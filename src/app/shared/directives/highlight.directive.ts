import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cmHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string;

  @Input('cmHighlight') highlightColor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || this.highlightColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
