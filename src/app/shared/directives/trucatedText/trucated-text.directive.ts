import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTrucatedText]'
})
export class TrucatedTextDirective implements OnInit {
  private el = inject(ElementRef);

  @Input() numberOfRow!: number;

  ngOnInit(): void {
    this.applyTruncate();
  }

  private applyTruncate(): void {
    const element = this.el.nativeElement;
    element.style.display = '-webkit-box';
    element.style.webkitBoxOrient = 'vertical';
    element.style.webkitLineClamp = this.numberOfRow;
    element.style.overflow = 'hidden';
    element.style.textOverflow = 'ellipsis';
    element.style.width = '100%';
  }

}
