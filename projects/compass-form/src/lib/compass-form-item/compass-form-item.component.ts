import { Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CompassForm } from '../compass-form';
import { CompassControl, ICompassComponent } from '../compass-control';
import { compassFormControlToComponentMap } from '../compass-form-control-to-component-map';


@Component({
    selector: 'compass-form-item',
    template: '',
    styleUrls: ['./compass-form-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CompassFormItemComponent<ModelType, T> implements OnInit {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    property: string;
    control: CompassControl<ModelType, T>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
        this.control = this.compassForm.controls[this.property];

        const compType = compassFormControlToComponentMap.get((this.control as any).constructor);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(compType as any);

        const viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<ICompassComponent<ModelType, T>>componentRef.instance).compassControl = this.control;
        (<ICompassComponent<ModelType, T>>componentRef.instance).compassForm = this.compassForm;
    }
}
