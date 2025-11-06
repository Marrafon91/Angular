import { Component } from '@angular/core';
import { Button } from './components/button/button'
import { Card } from './components/card/card'

@Component({
  selector: 'app-root',
  imports: [Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  onCardButtonClicked() {
    console.log('onCardButtonClicked')
  }
}
