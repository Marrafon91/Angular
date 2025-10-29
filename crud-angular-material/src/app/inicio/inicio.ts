import {ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon' 


@Component({
  selector: 'inicio',
  imports: [MatButtonModule, MatCardModule, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
