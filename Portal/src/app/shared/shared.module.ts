import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import { FormsModule } from '@angular/forms';
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
    PoModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class SharedModule { }
