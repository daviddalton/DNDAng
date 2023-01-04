import {BaseConverter} from "./base.converter";
import {CharacterClassList} from "../models/character-class-list";
import {CharacterClassConverter} from "./character-class.converter";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CharacterClassListConverter implements BaseConverter<CharacterClassList> {
  constructor(private characterClassConverter: CharacterClassConverter) {
  }

  fromJson(json: any): CharacterClassList {
    return CharacterClassList.Builder()
      .classes(json["results"]?.map((_: any) => this.characterClassConverter.fromJson(_)))
      .build()
  }
}
