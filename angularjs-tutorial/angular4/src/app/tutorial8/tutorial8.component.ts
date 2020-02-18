import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial8',
  templateUrl: './tutorial8.component.html',
  styleUrls: ['./tutorial8.component.css']
})
export class Tutorial8Component implements OnInit {
  public myProperty ="from tutorial8 component";
  public imageLink="http://lorempixel.com/200/100";
  constructor() {}

  ngOnInit() {
  }

}
