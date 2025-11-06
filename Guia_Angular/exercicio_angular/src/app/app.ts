import { Component } from '@angular/core';
import { Button } from './components/button/button'

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  buttonClicked() {
    console.log('Button Clicked')
  }
}
