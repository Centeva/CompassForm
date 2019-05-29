import {
  CompassControlConfig,
  CompassControl,
  ValueOrProvider
} from "projects/compass-form/src/public_api";

interface CustomControlConfig<ModelType, T>
  extends CompassControlConfig<ModelType, T> {
  message: ValueOrProvider<ModelType, string>;
}

export class CustomControl<ModelType, T> extends CompassControl<ModelType, T> {
  readonly type = "custom";
  constructor(public config: CustomControlConfig<ModelType, T>) {
    super(config);
  }

  update(model: ModelType) {
    super.update(model);
    const s = this.snapshot;
    const c = this.config;
    s.message = c.message instanceof Function ? c.message(model) : c.message;
  }
}
