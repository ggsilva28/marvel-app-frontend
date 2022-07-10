import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FavoritesComponentRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FontAwesomeModule,
        FavoritesComponentRoutingModule
    ],
    declarations: [FavoritesComponent]
})

export class FavoritesModule { }