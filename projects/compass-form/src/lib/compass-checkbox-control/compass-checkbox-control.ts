import { CompassControlConfig, CompassControl, ValueOrProvider } from '../compass-control';

type materialColor = "primary" | "warn" | "accent";
interface CompassCheckboxControlConfig<ModelType> extends CompassControlConfig<ModelType, boolean> {
  color?: ValueOrProvider<ModelType, materialColor>;
}

export class CompassCheckboxControl<ModelType> extends CompassControl<ModelType, boolean> {
    constructor(public config: CompassCheckboxControlConfig<ModelType>) {
        super(config);
    }

    update(model: ModelType) {
      super.update(model);
      const s = this.snapshot;
      const c = this.config;
      s.color = c.color instanceof Function ? c.color(model) : c.color;
  }
}
