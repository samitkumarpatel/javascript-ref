import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial9',
  templateUrl: './tutorial9.component.html',
  styleUrls: ['./tutorial9.component.css']
})
export class Tutorial9Component implements OnInit {
  
  public title = "hello from tutorial9";
  public applyClass = true;
  public applyColor = true;
  constructor() { 
  }

  ngOnInit() {
  }

}
