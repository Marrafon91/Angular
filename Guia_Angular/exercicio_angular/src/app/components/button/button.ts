import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})

export class Button {
  @Input({required: true, alias: 'text'}) buttonText: string = '';

  @Input({required: true, alias: 'style'}) buttonStyle: 'white' | 'purple' = 'white';

  @Input({alias: 'disabled'}) isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();    
  }
}
