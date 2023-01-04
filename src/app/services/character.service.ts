import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterClassListConverter} from "../converters/character-class-list.converter";

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService {

  constructor(http: HttpClient, private characterClassesListConverter: CharacterClassListConverter) {
    super(http);
  }

  getClasses(): Observable<any> {
    return super.get(`classes`, this.characterClassesListConverter)
  }

  // getRaces(): Observable<any> {
  //   return super.get(`races`)
  // }
  //
  // getSpells(): Observable<any> {
  //   return super.get(`spells`)
  // }
}
