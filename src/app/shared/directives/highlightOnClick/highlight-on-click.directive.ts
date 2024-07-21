import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]'
})
export class HighlightOnClickDirective {

  // ES COMPARTIDA POR TODAS LAS INSTANCIAS DE LA DIRECTIVA
  private static previouslySelected: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const isAlreadyHighlighted = this.el.nativeElement.classList.contains('highlighted');

    if (HighlightOnClickDirective.previouslySelected) {
      if (HighlightOnClickDirective.previouslySelected !== this.el.nativeElement) {
        this.renderer.removeClass(HighlightOnClickDirective.previouslySelected, 'highlighted');
      }
    }

    if (isAlreadyHighlighted) {
      this.renderer.removeClass(this.el.nativeElement, 'highlighted');
      HighlightOnClickDirective.previouslySelected = null;
    } else {
      this.renderer.addClass(this.el.nativeElement, 'highlighted');
      HighlightOnClickDirective.previouslySelected = this.el.nativeElement;
    }
  }

}
