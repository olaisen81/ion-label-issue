import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DialogComponentModule { }
