import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
 constructor( private dgzService: DbzService){}

  get characters(): Character[]{
    return [...this.dgzService.characters];
  }

  onDeletedCharacter(id:string):void{
    this.dgzService.deletedCharacterById(id)
  }

  onNewCharacter(character : Character): void{
    this.dgzService.addNewCharacter(character)
  }
}
