import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective implements OnInit {

  @Input() hoverText: string = ''; 

  private originalText: string = ''; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.originalText = this.el.nativeElement.textContent || '';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setProperty(this.el.nativeElement, 'textContent', this.hoverText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setProperty(this.el.nativeElement, 'textContent', this.originalText);
  }

}
