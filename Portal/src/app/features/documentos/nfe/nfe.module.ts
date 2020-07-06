import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NfeComponent } from './nfe.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';



@NgModule({
  declarations: [NfeComponent],
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    NfeComponent
  ]
})

export class NfeModule { }
