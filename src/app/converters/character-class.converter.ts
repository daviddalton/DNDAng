import {Injectable} from "@angular/core";
import {BaseConverter} from "./base.converter";
import {CharacterClass} from "../models/character-class";

@Injectable({
  providedIn: 'root'
})
export class CharacterClassConverter implements BaseConverter<CharacterClass> {
  constructor() {
  }
  fromJson(json: any): CharacterClass {
    return CharacterClass.Builder()
      .description(json["desc"])
      .name(json["name"])
      .slug(json["slug"])
      .equipment(json["equipment"])
      .build()
  }
}
