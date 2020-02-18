import { Component} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tutorial14b',
  template: `
             <p>from 14b</p>
             <label>pls enter 14b component value </label>
             <input type="test" #childtext (keyup)="onChange(childtext.value)">
             <p>Value from Parent 14b component is : {{parentData}}</p>
            `,
  inputs: ['parentData'],
  outputs:['childEvent']
})
export class Tutorial14bComponent {
  constructor() {
  }
  public parentData: string;
  childEvent = new EventEmitter<string>();
  onchange(value:string){
    this.childEvent.emit(value);
  }
}
