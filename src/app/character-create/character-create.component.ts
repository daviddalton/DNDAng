import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {

  }

}
