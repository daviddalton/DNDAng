import {CharacterClass} from "./character-class";
import {ModelBuilder} from "./model-builder";

export class CharacterClassList {
  public classes?: CharacterClass[];

  public static Builder() {
    return ModelBuilder(CharacterClassList)
  }
}
