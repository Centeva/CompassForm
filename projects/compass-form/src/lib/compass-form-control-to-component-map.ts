import { ICompassComponent, CompassControl } from './compass-control';
import { Type } from '@angular/core';

export const compassFormControlToComponentMap = new Map<string, Type<ICompassComponent<any, any>>>();

export function CompassComponent(control: Type<CompassControl<any, any>>) {
  return (target: Type<ICompassComponent<any, any>>) => {
    compassFormControlToComponentMap.set(control.name, target);
  };
}
