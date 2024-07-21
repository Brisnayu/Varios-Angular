import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() textButton!: string;

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
