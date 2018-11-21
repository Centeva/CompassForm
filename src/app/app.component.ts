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
      }),
      dollar: new CompassDollarControl({
        label: 'CompassDollarControl'
      }),
      estimatedDollar: new CompassEstimatedDollarControl({
        label: 'CompassEstimatedDollarControl'
      }),
      number: new CompassNumberControl({
        label: 'CompassNumberControl'
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
        label: 'CompassTextareaControl'
      }),
      custom: new CustomControl({
        label: 'custom',
        message: 'This component not included in library'
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
