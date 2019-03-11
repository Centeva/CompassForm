import { Component, OnInit } from '@angular/core';
import {
  CompassForm,
  CompassAutoCompleteControl,
  CompassCheckboxControl,
  CompassDateControl,
  CompassDollarControl,
  CompassEstimatedDollarControl,
  CompassNumberControl,
  CompassRadioGroupControl,
  CompassSelectControl,
  CompassStringControl,
  CompassTextareaControl
} from 'projects/compass-form/src/public_api';
import { CustomControl } from './customControl/customControl';
import * as moment from 'moment';
import { CompassHiddenControl } from 'projects/compass-form/src/lib/compass-hidden-control/compass-hidden-control';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => ({label: 'Option ' + x, value: x}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CompassFormApp';

  compassForm: CompassForm<any>;

  ngOnInit() {

    this.compassForm = new CompassForm<any>({
      autoComplete: new CompassAutoCompleteControl({
        label: 'CompassAutoCompleteControl',
        optionsProvider: () => Promise.resolve(options)
      }),
      checkbox: new CompassCheckboxControl({
        label: 'CompassCheckboxControl'
      }),
      date: new CompassDateControl({
        label: 'CompassDateControl',
        disabled: m => m.checkbox
      }),
      dollar: new CompassDollarControl({
        label: 'CompassDollarControl',
        disabled: m => m.checkbox,
        initialValue: 0
      }),
      estimatedDollar: new CompassEstimatedDollarControl({
        label: 'CompassEstimatedDollarControl',
        disabled: m => m.checkbox
      }),
      number: new CompassNumberControl({
        label: 'CompassNumberControl',
        disabled: m => m.checkbox
      }),
      radioGroup: new CompassRadioGroupControl({
        label: 'CompassRadioGroupControl',
        options: options,
        verticalDisplay: m => m.checkbox
      }),
      select : new CompassSelectControl({
        label: 'CompassSelectControl',
        options: options
      }),
      string: new CompassStringControl({
        label: 'CompassStringControl'
      }),
      textarea: new CompassTextareaControl({
        label: 'CompassTextareaControl',
        display: m => m.hidden < m.hiddenTest
      }),
      custom: new CustomControl({
        label: 'custom',
        message: 'This component not included in library'
      }),
      hidden: new CompassHiddenControl({
        display: false,
        label: null,
        initialValue: 100
      }),
      hiddenTest: new CompassNumberControl({
        label: 'hidden test',
        initialValue: 150,
        hint: 'If this value is below the value of the hidden field (100), the textarea should disapear'
      })
    });

    this.compassForm.addControl('Extra', new CompassStringControl({
      label: 'Extra Field added Later',
      initialValue: 'It works!'
    }));
  }

  getFormValue(): string {
    return JSON.stringify(this.compassForm.value, null, '\t');
  }
}
