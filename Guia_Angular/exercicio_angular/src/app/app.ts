import { Component } from '@angular/core';
import { componentsModule } from './components/components.module'

@Component({
  selector: 'app-root',
  imports: [componentsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  onCardButtonClicked() {
    console.log('onCardButtonClicked')
  }
}
