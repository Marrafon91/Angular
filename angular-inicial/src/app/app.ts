import { Component, signal } from '@angular/core';
import { HelloWorldComponent } from './helloworld/helloword.component';
import { Pagina } from './pagina/pagina';

@Component({
  imports: [HelloWorldComponent, Pagina],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-inicial');
}
