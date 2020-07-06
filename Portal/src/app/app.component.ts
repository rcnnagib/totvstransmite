import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoTableColumn, PoTableAction, PoPageAction, PoMenuPanelItem } from '@po-ui/ng-components';
import { AppServiceService } from './app-service.service';
import { NFe } from './features/documentos/nfe/nfe.model';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor() {
  }

  title = 'NFe';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Documentos', icon: 'po-icon po-icon-document', link: '../documentos' },
    { label: 'Gerenciamento', icon: 'po-icon po-icon-manufacture', link: '../gerenciamento' }
  ];
}
