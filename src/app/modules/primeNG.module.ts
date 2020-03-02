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
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

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
    CarouselModule,
    ListboxModule,
    ButtonModule,
    TableModule
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
    CarouselModule,
    ListboxModule,
    ButtonModule,
    TableModule
  ],
  declarations: []
})
export class PrimeNGModule { }
