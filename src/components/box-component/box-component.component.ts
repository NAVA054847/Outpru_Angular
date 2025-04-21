import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-box-component',
  imports: [FormsModule],
  templateUrl: './box-component.component.html',
  styleUrl: './box-component.component.css'
})


export class BoxComponentComponent {

temp:string="";

@Input() str:string="enter text";

@Output() myonblure:EventEmitter<any>=new EventEmitter<any>();

temp1?:any="";


f(){
  let u={mykey:this.str, myvalue:this.temp1}
  debugger
  this.myonblure.emit(u)
}


}
