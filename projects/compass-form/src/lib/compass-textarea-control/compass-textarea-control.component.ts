import { Input, Component } from "@angular/core";
import { CompassTextareaControl } from "./compass-textarea-control";
import { CompassForm } from "../compass-form";
import { ICompassComponent } from "../compass-control";
@Component({
  templateUrl: "./compass-textarea-control.component.html"
})
export class CompassTextareaControlComponent<ModelType>
  implements ICompassComponent<ModelType, string> {
  static readonly type = "textarea";
  @Input()
  compassForm: CompassForm<ModelType>;
  @Input()
  compassControl: CompassTextareaControl<ModelType>;

  get snapshot() {
    return this.compassControl.snapshot;
  }
}
