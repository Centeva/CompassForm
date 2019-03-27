import { CompassNumberControl } from "./compass-number-control";
import { CompassForm } from "../compass-form";
import { CompassStringControl } from "../compass-string-control/compass-string-control";

describe("CompassNumberControl", () => {
  it("bug: dynamic required prevents Number is integer validator", () => {
    const form = new CompassForm<any>({
      Alpha: new CompassNumberControl({
        label: "Alpha",
        required: d => d.Beta === "gamma"
      }),
      Beta: new CompassStringControl({
        label: "Beta"
      })
    });

    // act
    form.ngForm.setValue({
      Alpha: 2.2,
      Beta: "gamma"
    });
    form.ngForm.updateValueAndValidity();

    // assert should be invalid becuase of non integer value on field Alpha
    expect(form.valid).toBe(false);
  });
});
