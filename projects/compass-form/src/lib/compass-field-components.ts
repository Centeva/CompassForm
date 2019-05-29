import { Type, InjectionToken } from "@angular/core";
import { ICompassComponent } from "./compass-control";

export type CompassFieldComponentClass = Type<ICompassComponent<any, any>> & {
  readonly type: string;
};
export const CompassFieldComponents = new InjectionToken<
  CompassFieldComponentClass[]
>("CompassFieldComponents");
