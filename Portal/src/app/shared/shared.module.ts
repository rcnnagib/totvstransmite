import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';



@NgModule({
  declarations: [
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PoTemplatesModule,
    PoModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class SharedModule { }
