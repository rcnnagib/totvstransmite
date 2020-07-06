import { Component, OnInit } from '@angular/core';
import { NFe } from './nfe.model';
import { AppServiceService } from 'src/app/app-service.service';

import { PoMenuItem, PoTableColumn, PoTableAction, PoPageAction, PoMenuPanelItem } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-nfe',
  templateUrl: './nfe.component.html',
  styleUrls: ['./nfe.component.css']
})
export class NfeComponent implements OnInit {

  constructor(private nfeService: AppServiceService) {
  }
  items: Array<NFe> = [];

  title = 'NFe';

  showMoreDisabled = false;



    readonly literals: PoPageDynamicSearchLiterals = {
      quickSearchLabel: 'Resultado da pesquisa:'
    };


    private disableHireButton() {
      return !this.items.find(candidate => candidate['$selected']);
    }


    // tslint:disable-next-line: member-ordering
    actions: Array<PoTableAction> = [
      {
        action: this.excluir.bind(this),
        icon: 'po-icon-finance',
        label: 'Apply Discount',
        disabled: false },
        {
          action: this.excluir.bind(this),
          icon: 'po-icon-finance',
          label: 'Apply Discount',
          disabled: false }
    ]


    public readonly columns: Array<PoTableColumn> = [
      {
        property: 'status',
        type: 'label',
        width: '15%',
        labels: [
          { value: 1, color: 'color-01', label: 'recebido', tooltip: 'recebido' },
          { value: 2, color: 'color-05', label: 'assinado', tooltip: 'assinado' },
          { value: 3, color: 'color-08', label: 'invalido', tooltip: 'invalido' },
          { value: 4, color: 'color-09', label: 'pendente', tooltip: 'aguardando retorno' },
          { value: 5, color: 'color-07', label: 'Rejeitado', tooltip: 'Rejeitado' },
          { value: 6, color: 'color-11', label: 'Autorizado', tooltip: 'Autorizado' },
          { value: 7, color: 'color-06', label: 'Cancelado', tooltip: 'Cancelado' }]
      },
      {
        property: 'documentId',
        type: 'string',
        width: '15%'
      },
      {
        property: 'entidadeId',
        type: 'string',
        width: '15%'
      },
      {
        property: 'ambiente',
        type: 'number',
        width: '5%'
      },
      {
        property: 'modalidade',
        type: 'number',
        width: '5%'
      },
      {
        property: 'dataRecepcao',
        type: 'dateTime',
        width: '10%'
      },
      {
        property: 'statusDistribuicao',
        type: 'number',
        width: '5%'
      },
      {
        property: 'correlationId',
        type: 'string',
        width: '15%'
      }
    ];

    ngOnInit(){
      this.nfeService.NFes().subscribe( (nfes) => { this.items = nfes;} );

    }
    showMore(event){

    }

  excluir(item){}

  transmitir(){}
  cancelar(){}
  cancelAnimationFrame(){}









    private onClick() {
    }

}
