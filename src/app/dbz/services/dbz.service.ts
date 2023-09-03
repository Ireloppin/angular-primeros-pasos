import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid"



@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = [
    {name: 'Krillin',
    power: 1000,
    id: uuid()
  },
    {
      name: "Goku",
      power: 2000,
      id: uuid()
    },
    {
      name: "Vegeta",
      power: 900,
      id: uuid()
    }
  ]

  addNewCharacter( character : Character):void {
    const newCharacter = {...character, id:uuid()}
    this.characters.push(newCharacter)
  }

  deletedCharacterById(id: string): void {
   this.characters = this.characters.filter(item => item.id !== id)
  }

}
