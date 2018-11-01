import { Component, OnInit } from '@angular/core';
import { CompassForm } from 'projects/compass-form/src/public_api';
import { CompassStringControl } from 'projects/compass-form/src/lib/compass-string-control/compass-string-control';
import { CompassNumberControl } from 'projects/compass-form/src/lib/compass-number-control/compass-number-control';
import { CompassAutoCompleteControl } from 'projects/compass-form/src/lib/compass-auto-complete-control/compass-auto-complete-control';
import { CompassCheckboxControl } from 'projects/compass-form/src/lib/compass-checkbox-control/compass-checkbox-control';
import { CompassDateControl } from 'projects/compass-form/src/lib/compass-date-control/compass-date-control';
import { CompassDollarControl } from 'projects/compass-form/src/lib/compass-dollar-control/compass-dollar-control';
import { CompassRadioGroupControl } from 'projects/compass-form/src/lib/compass-radio-group-control/compass-radio-group-control';
import { CompassSelectControl } from 'projects/compass-form/src/lib/compass-select-control/compass-select-control';
import { CompassTextareaControl } from 'projects/compass-form/src/lib/compass-textarea-control/compass-textarea-control';
import { CompassEstimatedDollarControl } from 'projects/compass-form/src/lib/compass-estimated-dollar-control/compass-estimated-dollar-control';

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
        label: 'CompassDateControl'
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
    });
  }
}
