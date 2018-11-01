import { Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CompassForm } from '../compass-form';
import { CompassControl, CompassComponent } from '../compass-control';


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

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.control.getComponent());

        const viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<CompassComponent<ModelType, T>>componentRef.instance).compassControl = this.control;
        (<CompassComponent<ModelType, T>>componentRef.instance).compassForm = this.compassForm;
    }
}
