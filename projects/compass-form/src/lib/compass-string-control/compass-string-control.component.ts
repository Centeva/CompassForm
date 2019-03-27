import { Input, Component } from "@angular/core";
import { CompassStringControl } from "./compass-string-control";
import { ICompassComponent } from "../compass-control";
import { CompassForm } from "../compass-form";
@Component({
  templateUrl: "./compass-string-control.component.html"
})
export class CompassStringControlComponent<ModelType>
  implements ICompassComponent<ModelType, string> {
  static readonly type = "string";
  @Input()
  compassForm: CompassForm<ModelType>;
  @Input()
  compassControl: CompassStringControl<ModelType>;

  get snapshot() {
    return this.compassControl.snapshot;
  }
}
