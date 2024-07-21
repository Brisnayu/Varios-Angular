import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  @Input() highlightColor: string = '#173F35';
  @Input() textColor: string = 'white';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyles(this.highlightColor, this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles('inherit', 'inherit');
  }
  
  private setStyles(backgroundColor: string, color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);

    const paragraphs = this.el.nativeElement.querySelectorAll('p');
    for (let p of paragraphs) {
      this.renderer.setStyle(p, 'transition', 'all 0.3s ease-in-out');
      this.renderer.setStyle(p, 'background-color', backgroundColor);
      this.renderer.setStyle(p, 'color', color);
    }
  }
  

}

// PARA SOLO FONDO Y TITULO
// @Input('appHighlight') highlightColor: string = '#173F35';
//   @Input() textColor: string = 'white';

//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
//     this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor);
//     this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.renderer.setStyle(this.el.nativeElement, 'background-color', 'inherit');
//     this.renderer.setStyle(this.el.nativeElement, 'color', 'inherit');
//   }