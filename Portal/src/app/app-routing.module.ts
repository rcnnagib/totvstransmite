import { DocumentosComponent } from './features/documentos/documentos.component';
import { NfeComponent } from './features/documentos/nfe/nfe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciamentoComponent } from './features/gerenciamento/gerenciamento.component';


const routes: Routes = [
  { path: '', component: NfeComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'gerenciamento', component: GerenciamentoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
