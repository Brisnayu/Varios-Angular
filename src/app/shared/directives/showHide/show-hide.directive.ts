import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective implements OnChanges {

  @Input() appShowHide: boolean = true; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appShowHide']) {
      this.updateVisibility();
    }
  }

  private updateVisibility() {
    if (this.appShowHide) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
    }
  }

}
