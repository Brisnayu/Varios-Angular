import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGradientColor]'
})
export class GradientColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '30px');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(45deg, #571845 30%, #C70039 79%)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px 0 #FFC300');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');

    const paragraphs = this.el.nativeElement.querySelectorAll('p');
    for (let p of paragraphs) {
      this.renderer.setStyle(p, 'color', 'white');
    };
  }

}
