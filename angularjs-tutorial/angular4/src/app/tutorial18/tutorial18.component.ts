import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial18',
  templateUrl: './tutorial18.component.html',
  styleUrls: ['./tutorial18.component.css']
})
export class Tutorial18Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(value : any){
    console.log(value);
  }
}
