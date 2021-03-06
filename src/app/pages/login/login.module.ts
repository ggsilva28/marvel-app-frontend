import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from 'src/app/components/components.module';

import { LoginComponentRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        ComponentsModule,
        LoginComponentRoutingModule,
    ],
    declarations: [LoginComponent]
})

export class LoginComponentModule { }