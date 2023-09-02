import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public hero: string = 'IronMan'
  public name: string = 'tony';
  public age: number = 45

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
   getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
   }

   changeName():void {
    this.hero = "Spiderman";
    this.name = "peter";
   }

   changeAge():void {
    this.age = 19;
   }
   reset():void {
    this.hero = "IronMan";
    this.name = "tony";
    this.age = 45;
   }
}
