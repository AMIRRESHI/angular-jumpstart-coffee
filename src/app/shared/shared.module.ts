import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { MapModule } from './map/map.module';
import { PaginationModule } from './pagination/pagination.module';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AppLoopDirective } from './directives/app-loop.directive';
import { CupComponent } from './cup/cup.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  imports: [CommonModule, MapModule, FilterTextboxModule, PaginationModule ],
  exports: [ CommonModule, FormsModule, CapitalizePipe, TrimPipe, SortByDirective,
             MapModule, FilterTextboxModule, PaginationModule, HighlightDirective, CardHoverDirective, UnlessDirective, AppLoopDirective, CupComponent, PayComponent ],
  declarations: [ CapitalizePipe, TrimPipe, SortByDirective, HighlightDirective, CardHoverDirective, UnlessDirective, AppLoopDirective, CupComponent, PayComponent ]
})
export class SharedModule { }
