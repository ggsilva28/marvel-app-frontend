import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './button/button.component';
import { ItemComponent } from './item/item.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ItemComponent,
    PaginationComponent
  ],
  exports: [
    ButtonComponent,
    ItemComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
