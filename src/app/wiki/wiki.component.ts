import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../services/character.service";
import {Subscription} from "rxjs";
import {CharacterClass} from "../models/character-class";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  classes?: CharacterClass[];

  classesSubscription: Subscription;

  constructor(private characterService: CharacterService) {
    this.classesSubscription = this.characterService.getClasses().subscribe((_: any) => {
      this.classes = _.classes;
    })
  }

  ngOnInit(): void {
  }

}
