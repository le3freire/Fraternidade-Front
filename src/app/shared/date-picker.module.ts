import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import {
  MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, DateAdapter,
  MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER
} from '@angular/material';

import { NgModule, Inject, Injectable, Optional } from '@angular/core';

// import { Platform } from '@angular/cdk/platform/typings/platform';


import * as _moment from 'moment';

import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Injectable()

// extend NativeDateAdapter's format method to specify the date format.
export class CustomDateAdapter extends MomentDateAdapter /*NativeDateAdapter*/ {

  // If required extend other NativeDateAdapter methods.
  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
    super(dateLocale);
  }

  parse(value, parseFormat) {
    if (value && typeof value === 'string') {
      // console.log(moment(value, parseFormat, this.locale, true));
      return moment(value, parseFormat, this.locale, true);
    }
    return value ? moment(value).locale(this.locale) : undefined;
  }
}

@NgModule({
  imports: [],
  exports: [MatDatepickerModule, MatNativeDateModule],
  declarations: [],
  providers: [MAT_DATE_LOCALE_PROVIDER,
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-br'
    },
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class DatePickerModule { }
