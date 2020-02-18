import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial17',
  templateUrl: './tutorial17.component.html',
  styleUrls: ['./tutorial17.component.css']
})
export class Tutorial17Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value : any){
    console.log(value);
  }
  public myCity = "Maidenhead"
}
