import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {

  private defaultBgColor = '#007bff';
  private hoverBgColor = '#0056b3';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyles();
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.hoverBgColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.defaultBgColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

}
