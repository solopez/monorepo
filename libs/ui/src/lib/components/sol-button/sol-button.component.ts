import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sol-button',
  templateUrl: './sol-button.component.html',
  styleUrls: ['./sol-button.component.scss']
})
export class SolButtonComponent {
  @Input() buttonClass = 'btn-primary sol-button';
  @Input() title: string;
  @Output() clicked = new EventEmitter();

  handleClick(e) {
    this.clicked.emit(e);
  }

}
