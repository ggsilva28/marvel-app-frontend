import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponentRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FontAwesomeModule,
        HomeComponentRoutingModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule { }