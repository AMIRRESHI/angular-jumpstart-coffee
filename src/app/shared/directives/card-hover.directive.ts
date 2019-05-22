import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[cmCardHover]'
})
export class CardHoverDirective {

  @HostBinding('class.card-outline-primary') private isHovering: boolean = false;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { 
    renderer.setStyle(el.nativeElement, 'background-color','gray');

  }

  @HostListener('mouseover') onMouseOver(){
    let puchLineEl = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(puchLineEl, 'display','block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    let puchLineEl = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(puchLineEl, 'display','none');
    this.isHovering = false;
  }

}
