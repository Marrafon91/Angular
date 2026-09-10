import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloword.component';

@Component({
  imports: [HelloWorldComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-inicial');
}
