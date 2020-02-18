import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero',
  templateUrl:'./hero.component.html'
})
export class HeroComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
