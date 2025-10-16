import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloWorld/helloWorld.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Estudos');
}
