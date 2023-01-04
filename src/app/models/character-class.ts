import {ModelBuilder} from "./model-builder";

export class CharacterClass {
  name?: string;
  description?: string;
  equipment?: string;
  slug?: string;

  public static Builder(){
    return ModelBuilder(CharacterClass)
  }
}
