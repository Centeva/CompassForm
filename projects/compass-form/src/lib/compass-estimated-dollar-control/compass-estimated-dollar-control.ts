import {
  CompassControlConfig,
  CompassControl,
  ValueOrProvider
} from "../compass-control";

interface CompassEstimatedDollarControlConfig<ModelType>
  extends CompassControlConfig<ModelType, number> {
  min?: ValueOrProvider<ModelType, number>;
  max?: ValueOrProvider<ModelType, number>;
}

export class CompassEstimatedDollarControl<ModelType> extends CompassControl<
  ModelType,
  number
> {
  readonly type = "estimatedDollar";
  constructor(public config: CompassEstimatedDollarControlConfig<ModelType>) {
    super(config);

    this.ngControl.valueChanges.subscribe(value => {
      const valueTruncated = Math.floor(value);
      if (valueTruncated.valueOf() && valueTruncated !== value) {
        this.ngControl.setValue(valueTruncated, { emitEvent: false });
        this.ngControl.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  update(model: ModelType) {
    super.update(model);
    const s = this.snapshot;
    const c = this.config;
    s.min = c.min instanceof Function ? c.min(model) : c.min;
    s.max = c.max instanceof Function ? c.max(model) : c.max;
  }
}
