import { Routes } from '@angular/router';
import {CharacterCreateComponent} from "./character-create/character-create.component";
import {WikiComponent} from "./wiki/wiki.component";

const appRoutes: Routes = [
  {
    path: 'create',
    component: CharacterCreateComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  }
];
export default appRoutes;
