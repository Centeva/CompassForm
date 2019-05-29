import moment from "moment";
import {
  CompassControlConfig,
  ValueOrProvider,
  CompassControl
} from "../compass-control";

interface CompassDateControlConfig<ModelType>
  extends CompassControlConfig<ModelType, moment.Moment> {
  minDate?: ValueOrProvider<ModelType, moment.Moment>;
  maxDate?: ValueOrProvider<ModelType, moment.Moment>;
}

const defaultMinDate = moment([1900, 1, 1]);
const defaultMaxDate = moment([3000, 1, 1]);

export class CompassDateControl<ModelType> extends CompassControl<
  ModelType,
  moment.Moment
> {
  readonly type = "date";
  constructor(public config: CompassDateControlConfig<ModelType>) {
    super(config);
  }

  update(model: ModelType) {
    super.update(model);
    const s = this.snapshot;
    const c = this.config;
    s.minDate =
      c.minDate instanceof Function
        ? c.minDate(model)
        : c.minDate || defaultMinDate;
    s.maxDate =
      c.maxDate instanceof Function
        ? c.maxDate(model)
        : c.maxDate || defaultMaxDate;
  }
}
