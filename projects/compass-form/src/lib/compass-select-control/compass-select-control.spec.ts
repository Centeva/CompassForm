import { CompassSelectControl } from "./compass-select-control";
import { CompassForm } from "../compass-form";
import { CompassStringControl } from "../compass-string-control/compass-string-control";

describe("CompassSelectControl", () => {
  it("option propertiy updates on form value change", () => {
    // arrange
    const f = new CompassForm<any>({
      stringProp: new CompassStringControl({ label: "Prop One" }),
      numberProp: new CompassSelectControl({
        options: data =>
          data.stringProp !== "foo" ? [] : [{ label: "foo", value: 1 }],
        label: data => (data.stringProp !== "foo" ? "before" : "after")
      })
    });

    // assert
    expect(f.controls.numberProp.snapshot.label).toBe("before");
    expect(f.controls.numberProp.snapshot.options.length).toBe(0);

    // act
    f.ngForm.controls.stringProp.setValue("foo");

    // assert
    expect(f.controls.numberProp.snapshot.label).toBe("after");
    expect(f.controls.numberProp.snapshot.options.length).toBe(1);
  });
});
