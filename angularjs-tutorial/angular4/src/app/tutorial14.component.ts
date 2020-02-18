import { Component} from '@angular/core';
import { Tutorial14bComponent} from './tutorial14b.component';
@Component({
  selector: 'app-tutorial14',
  template: `
             <p>tutorial14 component</p>
             <label>pls enter 14component value </label>
             <input type="test" #ptext (keyup)="0">
             <app-tutorial14b (childEvent)="childData=$event"[parentData]="ptext.value"></app-tutorial14b>
            {{childEvent}}
            `,

})
export class Tutorial14Component {
  constructor() {
  }
  public childData: string;
}
