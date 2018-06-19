import { DatePickerModule } from './date-picker.module';

describe('DatePickerModule', () => {
  let datePickerModule: DatePickerModule;

  beforeEach(() => {
    datePickerModule = new DatePickerModule();
  });

  it('should create an instance', () => {
    expect(datePickerModule).toBeTruthy();
  });
});
