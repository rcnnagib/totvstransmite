import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { AppServiceService } from './app-service.service';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { NfeModule } from './features/documentos/nfe/nfe.module';
import { GerenciamentoComponent } from './features/gerenciamento/gerenciamento.component';
import { DocumentosComponent } from './features/documentos/documentos.component';
import { SharedModule } from './shared/shared.module';
import { ThfModule } from '@totvs/thf-ui';

@NgModule({
  declarations: [
    AppComponent,
    GerenciamentoComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    NfeModule,
    SharedModule,
    ThfModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
