import { NgModule } from '@angular/core';

import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  imports: [
    CheckboxModule,
    CalendarModule,
    ChipsModule,
    AutoCompleteModule,
    DropdownModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextModule,
    TabViewModule,
    CodeHighlighterModule,
    CarouselModule
  ],
  exports: [
    CheckboxModule,
    CalendarModule,
    ChipsModule,
    AutoCompleteModule,
    DropdownModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextModule,
    TabViewModule,
    CodeHighlighterModule,
    CarouselModule
  ],
  declarations: []
})
export class PrimeNGModule { }
