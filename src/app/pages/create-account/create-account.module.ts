import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreateAccountComponentRoutingModule } from './create-account-routing.module';

import { CreateAccountComponent } from './create-account.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        ComponentsModule,
        CreateAccountComponentRoutingModule
    ],
    declarations: [CreateAccountComponent]
})

export class CreateAccountModule { }