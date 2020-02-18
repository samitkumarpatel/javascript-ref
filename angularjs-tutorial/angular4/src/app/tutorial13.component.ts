import { Component} from '@angular/core';

@Component({
  selector: 'app-tutorial13',
  template: `
             <p [ngClass]="{classOne:cone,classTwo:ctwo}">ngClass should apply dynamically</p>
             <button (click)="toggle()">toggle</button>
             <p [ngStyle]="{'font-style' : style,'font-size':size}">dynamic inline style paragraph</p>
            `,
  styles : [`.classOne{color:blue},
             .classTwo{background-color:black}`]
})
export class Tutorial13Component {
  constructor() {
  }
  cone=true;
  ctwo=true;
  public style='italic'
  public size='30px'
  toggle(){
      this.cone=!this.cone;
      this.ctwo=!this.ctwo;
  }
}
