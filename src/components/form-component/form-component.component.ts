import { Component, EventEmitter, model, Output, output } from '@angular/core';
import { car } from '../../app/car';
import { BoxComponentComponent } from '../box-component/box-component.component';

@Component({
  selector: 'app-form-component',
  imports: [BoxComponentComponent],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})

export class FormComponentComponent {
obj:car=({model:"--",name:"--",price:12000})
arr:Array<any>=new Array<any>();

f1(newobj:any){

if(newobj.mykey=="model")
  this.obj.model=newobj.myvalue;

if(newobj.mykey=="name")
  this.obj.name=newobj.myvalue;

if(newobj.mykey=="price")
  this.obj.price=newobj.myvalue;

  
}








ngOnInit(){
  this.arr=Object.keys(this.obj);
}


}
