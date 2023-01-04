export type IModelBuilder<T> = { [k in keyof T]-?: (arg: T[k]) => IModelBuilder<T> } & { build(): T };

type ModelType<T> = new(...args: unknown[]) => T;

export function ModelBuilder<T>(modelType: ModelType<T>): IModelBuilder<T> {
  const properties: Record<string, unknown> = {};

  const builder = new Proxy(
    {},
    {
      get(target: any, key: string) {
        if ('build' === key) {
          return () => Object.assign(new modelType(), {...properties});
        } else {
          return (value: unknown): unknown => {
            properties[key.toString()] = value;
            return builder;
          };
        }
      }
    }
  );

  return builder as IModelBuilder<T>
}
