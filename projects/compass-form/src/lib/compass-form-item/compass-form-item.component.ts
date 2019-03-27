import {
  Component,
  Input,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewEncapsulation,
  InjectionToken,
  Inject,
  Type
} from "@angular/core";
import { CompassForm } from "../compass-form";
import { CompassControl, ICompassComponent } from "../compass-control";
import {
  CompassFieldComponents,
  CompassFieldComponentClass
} from "../compass-field-components";

@Component({
  selector: "compass-form-item",
  template: "",
  styleUrls: ["./compass-form-item.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CompassFormItemComponent<ModelType, T> implements OnInit {
  @Input()
  compassForm: CompassForm<ModelType>;
  @Input()
  property: string;
  control: CompassControl<ModelType, T>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    @Inject(CompassFieldComponents)
    private fieldComponents: CompassFieldComponentClass[]
  ) {}

  ngOnInit() {
    this.control = this.compassForm.controls[this.property];

    const compType = this.fieldComponents.find(
      c => c.type === this.control.type
    );
    if (compType) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        compType
      );

      const viewContainerRef = this.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<ICompassComponent<ModelType, T>>(
        componentRef.instance
      )).compassControl = this.control;
      (<ICompassComponent<ModelType, T>>(
        componentRef.instance
      )).compassForm = this.compassForm;
    } else {
      throw new Error(
        "CompassForm: Could not find component for type: " + this.control.type
      );
    }
  }
}
