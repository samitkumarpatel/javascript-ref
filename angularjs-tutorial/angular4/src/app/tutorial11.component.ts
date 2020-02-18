import { Component} from '@angular/core';

@Component({
  selector: 'app-tutorial11',
  template: `
            <input type="text" [(ngModel)]="firstname">
            <input type="text" [(ngModel)]="lastname">
            <br/>
            name : {{firstname}} {{lastname}}
            `
})
export class Tutorial11Component {
  constructor() {}
  public firstname;
  public lastname;
}
