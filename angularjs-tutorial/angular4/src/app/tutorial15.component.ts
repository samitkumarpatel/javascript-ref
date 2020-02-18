import { Component} from '@angular/core';
@Component({
  selector: 'app-tutorial15',
  template: `
             <h4>{{name | uppercase}}</h4>
             <h4>{{name | lowercase}}</h4>
             <h4>{{name | slice:'2':'4'}}</h4>
             <h4>{{8.234 | number : '1.2-3'}}</h4>
             <h4>{{8.234 | number : '2.2'}}</h4>
             <a href="https://angular.io/docs/ts/latest/guide/pipes.html">about pipe</a>
            `,

})
export class Tutorial15Component {
  constructor() {}
  public name = 'SamitKumar'
}
