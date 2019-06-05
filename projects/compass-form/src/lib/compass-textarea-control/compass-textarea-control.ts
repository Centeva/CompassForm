import { CompassControlConfig, CompassControl } from "../compass-control";
interface CompassTextareaControlConfig<ModelType>
  extends CompassControlConfig<ModelType, string> {}

export class CompassTextareaControl<ModelType> extends CompassControl<
  ModelType,
  string
> {
  readonly type = "textarea";
  constructor(public config: CompassTextareaControlConfig<ModelType>) {
    super(config);
  }
}
