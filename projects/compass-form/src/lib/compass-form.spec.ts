import { FormGroup } from "@angular/forms";
import { CompassForm, CompassFormConfig } from "./compass-form";
import { CompassStringControl } from "./compass-string-control/compass-string-control";
import { CompassNumberControl } from "./compass-number-control/compass-number-control";

interface FormModel {
  stringProp: string;
  numberProp?: number;
}

describe("compassForm", () => {
  it("creates an angular FormGroup", () => {
    // arrange

    // act
    const compassForm = new CompassForm<FormModel>({
      stringProp: new CompassStringControl({
        label: "foo",
        initialValue: "bar"
      })
    });

    // assert
    expect(compassForm.ngForm instanceof FormGroup);
    expect(compassForm.value).toEqual({ stringProp: "bar" });
  });

  it("dynamic properties update on form value chaange", () => {
    // arrange
    const f = new CompassForm<FormModel>({
      stringProp: new CompassStringControl({ label: "Prop One" }),
      numberProp: new CompassNumberControl({
        label: data => (data.stringProp !== "foo" ? "before" : "after"),
        required: data => (data.stringProp !== "foo" ? true : false),
        display: data => (data.stringProp !== "foo" ? true : false),
        hint: data => (data.stringProp !== "foo" ? "before" : "after"),
        width: data => (data.stringProp !== "foo" ? "before" : "after"),
        disabled: data => (data.stringProp !== "foo" ? true : false)
      })
    });

    // assert
    expect(f.controls.numberProp.snapshot.label).toBe("before");
    expect(f.controls.numberProp.snapshot.required).toBe(true);
    expect(f.controls.numberProp.snapshot.display).toBe(true);
    expect(f.controls.numberProp.snapshot.hint).toBe("before");
    expect(f.controls.numberProp.snapshot.width).toBe("before");
    expect(f.controls.numberProp.snapshot.disabled).toBe(true);

    // act
    f.ngForm.controls.stringProp.setValue("foo");

    // assert
    expect(f.controls.numberProp.snapshot.label).toBe("after");
    expect(f.controls.numberProp.snapshot.required).toBe(false);
    expect(f.controls.numberProp.snapshot.display).toBe(false);
    expect(f.controls.numberProp.snapshot.hint).toBe("after");
    expect(f.controls.numberProp.snapshot.width).toBe("after");
    expect(f.controls.numberProp.snapshot.disabled).toBe(false);
    expect(f.value.stringProp).toBe("foo");
  });

  it("error message handler takes errors object as argument", () => {
    const errorMessageSpy = jasmine.createSpy("errorMessage");
    const f = new CompassForm<Partial<FormModel>>({
      stringProp: new CompassStringControl({
        label: "Prop One",
        errorMessage: errorMessageSpy,
        validators: [() => ({ testError: true })]
      })
    });

    expect(errorMessageSpy).toHaveBeenCalledWith({ testError: true });
  });

  it("required property add required validator and default error message", () => {
    const f = new CompassForm<Partial<FormModel>>({
      stringProp: new CompassStringControl({
        label: "Prop One",
        required: true
      })
    });

    expect(f.ngForm.controls.stringProp.valid).toBeFalsy();
    expect(f.controls.stringProp.snapshot.errorMessage).toBe("Required");
  });

  it("display defaults to true", () => {
    const f = new CompassForm<Partial<FormModel>>({
      stringProp: new CompassStringControl({
        label: "Prop One"
      })
    });

    expect(f.controls.stringProp.snapshot.display).toBe(true);
  });

  it("sort order property sets order of items", () => {
    // act
    const f = new CompassForm<Partial<FormModel>>({
      numberProp: new CompassNumberControl({
        label: "Prop One",
        sortOrder: 10
      }),
      stringProp: new CompassStringControl({
        label: "Prop One",
        sortOrder: 5
      })
    });

    // assert
    expect(f.controlsArray[0].key).toBe("stringProp");
    expect(f.controlsArray[1].key).toBe("numberProp");
  });

  it("Hidden components are disabled", () => {
    // arrange
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        display: false
      }),
      stringProp: new CompassStringControl({
        label: "string prop",
        display: true
      })
    };

    // act
    const f = new CompassForm<Partial<FormModel>>(formConfig);

    // assert
    expect(f.ngForm.get("numberProp").disabled).toBeTruthy();
    expect(f.ngForm.get("stringProp").disabled).toBeFalsy();
  });

  it("disabled prop disables controls", () => {
    // arrange
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        disabled: true
      })
    };

    // act
    const f = new CompassForm<Partial<FormModel>>(formConfig);

    // assert
    expect(f.ngForm.get("numberProp").disabled).toBeTruthy();
  });

  it("disabled can update dynamically", () => {
    // arrange
    let disabled = false;
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        disabled: () => disabled
      }),
      stringProp: new CompassStringControl({
        label: "Prop Two",
        disabled: () => !disabled
      })
    };

    // act
    const f = new CompassForm<Partial<FormModel>>(formConfig);

    // assert
    expect(f.ngForm.get("numberProp").disabled).toBe(false);
    expect(f.ngForm.get("stringProp").disabled).toBe(true);

    // act
    disabled = true;
    f.update();

    // assert
    expect(f.ngForm.get("numberProp").disabled).toBe(true);
    expect(f.ngForm.get("stringProp").disabled).toBe(false);
  });

  it("required can update dynamically", () => {
    // arrange
    let required = true;
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        required: () => required
      })
    };

    // act
    const form = new CompassForm(formConfig);

    // assert
    expect(form.valid).toBe(false);

    // act
    form.ngForm.get("numberProp").setValue(10);

    // assert
    expect(form.valid).toBe(true);

    // act
    required = false;
    form.ngForm.get("numberProp").setValue(null);

    // assert
    expect(form.valid).toBe(true);
  });

  it("form with all controls disabled is valid", () => {
    // arrange
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        required: true,
        disabled: true
      })
    };

    // act
    const form = new CompassForm(formConfig);

    // assert
    expect(form.valid).toBe(true);
  });

  it("getRawValue allows access to disabled values", () => {
    // arrange
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        required: true,
        disabled: true,
        initialValue: 1234
      })
    };

    // act
    const form = new CompassForm(formConfig);

    // assert
    expect(form.value.numberProp).toBe(1234);
  });

  it("update use a single frozen model", () => {
    // This is important functionality to support the CustomData Forms
    // arrange
    let model1 = null;
    let model2 = null;
    const formConfig: CompassFormConfig<Partial<FormModel>> = {
      numberProp: new CompassNumberControl({
        label: "Prop One",
        disabled: m => {
          model1 = m;
          return false;
        }
      }),
      stringProp: new CompassStringControl({
        label: "Prop Two",
        disabled: m => {
          model2 = m;
          return false;
        }
      })
    };

    // act
    const f = new CompassForm<Partial<FormModel>>(formConfig);
    f.update();

    // assert
    expect(model1).not.toBeNull();
    expect(model2).not.toBeNull();
    expect(model1).toBe(model2);
  });

  it("form level validation", () => {
    // arrange
    const form = new CompassForm(
      {
        Min: new CompassNumberControl({ label: "min" }),
        Max: new CompassNumberControl({ label: "max" })
      },
      m => {
        if (m.value.Min > m.value.Max) {
          return {
            minmax: "Min is greater than max"
          };
        } else {
          return null;
        }
      }
    );

    // act
    form.ngForm.setValue({ Min: 10, Max: 5 });
    form.ngForm.updateValueAndValidity();

    // assert
    expect(form.valid).toBeFalsy();
  });
});
