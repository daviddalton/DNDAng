export interface BaseConverter<T> {

  fromJson(json: object): T;
}
