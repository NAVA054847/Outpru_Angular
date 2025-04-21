import { Component } from '@angular/core';
import { BoxComponentComponent } from '../components/box-component/box-component.component';
import { FormComponentComponent } from '../components/form-component/form-component.component';

@Component({
  selector: 'app-root',
  imports: [BoxComponentComponent,FormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myp';
}
