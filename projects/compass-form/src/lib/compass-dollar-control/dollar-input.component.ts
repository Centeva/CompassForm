import { Component, Input, forwardRef, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'compass-dollar-input',
  templateUrl: './dollar-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DollarInputComponent),
      multi: true,
    },
  ],
})
export class DollarInputComponent implements ControlValueAccessor {

  @Input()
  hintLabel: string;
  @Input()
  placeholder: string;
  @Input()
  min: number;
  @Input()
  max: number;
  @Input()
  key: string;
  @Input()
  errorMessage: string;
  @ViewChild('input')
  inputRef: ElementRef<HTMLInputElement>;

  currentStrValue = '';
  onchange: (v: number) => void;
  onTouched: () => void;
  isDisabled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  writeValue(value: number): void {
    console.log('write', value);
    this.currentStrValue = value === undefined || value === null ? '' : '' + value;
    if (this.inputRef.nativeElement === this.document.activeElement) {
      this.focus();
    } else {
      this.blur();
    }
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: KeyboardEvent) {
    const target = (event.target as HTMLInputElement);
    const newValue = target.value;
    const vaidInput = !!/^-?[0-9]*(\.[0-9]?[0-9]?)?$/.exec(newValue);
    const numValue = +newValue;
    const inBounds = this.checkBounds(numValue);
    if (vaidInput && inBounds) {
      this.currentStrValue = newValue;
      this.onchange(numValue);
    } else {
      target.value = this.currentStrValue;
    }
  }

  checkBounds(num: number) {
    const min = this.min !== undefined && this.min !== null ? this.min : Number.MIN_SAFE_INTEGER;
    const max = this.max !== undefined && this.max !== null ? this.max : Number.MAX_SAFE_INTEGER;
    return min <= num && max >= num;
  }

  focus() {
    const el = this.inputRef.nativeElement;
    el.value = this.currentStrValue;
    el.selectionStart = 0;
    el.selectionEnd = Number.MAX_SAFE_INTEGER;
  }

  blur() {
    this.currentStrValue = (+this.currentStrValue) + '';
    this.inputRef.nativeElement.value = this.format(this.currentStrValue);
  }

  format(value) {
    if (!value) {
      return '';
    }
    const match = /^(-?)([0-9]*)\.?([0-9]?[0-9]?)/.exec(value);
    let middlePart = match[2];
    let formatedMiddlePart = '';
    while (middlePart.length > 3) {
      formatedMiddlePart = ',' + middlePart.substr(-3) + formatedMiddlePart;
      middlePart = middlePart.substr(0, middlePart.length - 3);
    }
    formatedMiddlePart = middlePart + formatedMiddlePart;
    return match[1] +  formatedMiddlePart + '.' + (match[3] + '00').substr(0, 2);
  }
}
