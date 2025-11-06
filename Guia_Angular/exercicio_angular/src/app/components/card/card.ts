import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({required: true})
  planType: string = '';

  @Input({required: true})
  planPrice: number = 0;

  @Input({required: true})
  cardStyle: 'orange' | 'purple' = 'orange'

  @Output('buttonClicked')
  buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();

  }
}
