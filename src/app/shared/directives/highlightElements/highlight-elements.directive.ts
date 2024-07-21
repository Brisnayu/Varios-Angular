import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElements]'
})
export class HighlightElementsDirective {

  private selectedElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    if (this.selectedElement) {
      this.renderer.removeClass(this.selectedElement, 'nameClass');
    }

    this.selectedElement = this.el.nativeElement;
    this.renderer.addClass(this.selectedElement, 'nameClass');
  }

}
