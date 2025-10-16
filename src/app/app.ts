import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloWorld/helloWorld.component'
import { Minhapagina } from './minhapagina/minhapagina'

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, Minhapagina],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Estudos');
}
