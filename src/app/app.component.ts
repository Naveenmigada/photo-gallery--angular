import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {  RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatMenuModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photo-gallery';
}
