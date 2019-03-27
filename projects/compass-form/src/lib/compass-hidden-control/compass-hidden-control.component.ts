import { Input, Component } from "@angular/core";
import { CompassHiddenControl } from "./compass-hidden-control";
import { ICompassComponent } from "../compass-control";
import { CompassForm } from "../compass-form";

@Component({
  template: ""
})
export class CompassHiddenControlComponent<ModelType>
  implements ICompassComponent<ModelType, string> {
  static readonly type = "hidden";
  @Input()
  compassForm: CompassForm<ModelType>;
  @Input()
  compassControl: CompassHiddenControl<ModelType>;

  get snapshot() {
    return this.compassControl.snapshot;
  }
}
