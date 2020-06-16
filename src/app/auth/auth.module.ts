import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        AuthRoutingModule,
        CommonModule
    ]
})
export class AuthModule {}