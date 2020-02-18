import { Component} from '@angular/core';

@Component({
  selector: 'app-tutorial12',
  template: `
             <p *ngIf="showFlag">showing because ngIf is true</p>
             <br/>
             <p *ngIf="hideFlag">hide</p>
             
             <div [ngSwitch]="color">
                <p *ngSwitchCase="'red'">red color</p>
                <p *ngSwitchCase="'yellow'">yellow color</p>
                <p *ngSwitchDefault>invalid color</p>
             </div>
             
             <ul>
               <li *ngFor="let col of mycolor">{{col}}</li>
             </ul>
            `
})
export class Tutorial12Component {
  constructor() {
    
  }
  public showFlag = true;
  public hideFlag = false;
  public color='red';
  public mycolor = ['red','blue','green'];
}
