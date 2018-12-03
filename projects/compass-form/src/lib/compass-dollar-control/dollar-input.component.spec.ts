import { DollarInputComponent } from './dollar-input.component';

describe('dollar-input', () => {
  it('works', () => {
    const component = new DollarInputComponent(null);
    const testCases = [
      ['1234567890', '1,234,567,890.00'],
      ['', ''],
      ['123', '123.00'],
      ['1234', '1,234.00'],
      ['123456', '123,456.00'],
      ['12345678.90', '12,345,678.90']
    ];
    testCases.forEach(([input, output]) => {

      expect(component.format(input)).toBe(output);

    });
  });
});
