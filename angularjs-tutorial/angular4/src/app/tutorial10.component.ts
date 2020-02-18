import { Component} from '@angular/core';

@Component({
  selector: 'app-tutorial10',
  template: `
            <button (click)="onClick()">click me</button> 
            <br/>
            name : <input type="text" #valueRef/>
            <button (click)="getValue(valueRef.value)">getTheInputValue</button>
            <div>note- use $event for event binding</div>
            `
})
export class Tutorial10Component {
  constructor() {}
  
  onClick(){
    alert('u clicked me ?');
  }

  getValue(val){
    alert(val);
  }
}
