import { IdEnt } from './../../features/documentos/nfe/id-ent';
import { AppServiceService } from 'src/app/app-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import { PoNotificationService, PoSelectOption, PoMultiselectOption } from '@po-ui/ng-components';
import { NfeMonitoramentoInterface } from '../nfe/nfe-monitoramento-interface';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  formNfeMonitor: FormGroup;
  dadosIdEnt: Array<IdEnt>;

  readonly statusDoc: Array<PoSelectOption> = [
    { label: 'Não transmitida', value: 'Não transmitida' },
    { label: 'Autorizada', value: 'Autorizada' },
    { label: 'Transmitida', value: 'Transmitida' },
    { label: 'Cancelada', value: 'Cancelada' },
    { label: 'Rejeitada', value: 'Rejeitada' },
    { label: 'Inutilizada', value: 'Inutilizada' },
    { label: 'Denegada', value: 'Denegada' }
  ];

  readonly tipoNF: Array<PoSelectOption> = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Entrada', value: 'Entrada' },
    { label: 'Saída', value: 'Saída' }
  ];

  readonly ambiente: Array<PoSelectOption> = [
    { label: '', value: '' },
    { label: 'Homologação', value: 'Homologação' },
    { label: 'Produção', value: 'Produção' }
  ];

  readonly filiais: Array<PoMultiselectOption> = [
    { value: '412341', label: 'D MG 01' },
    { value: '518734', label: 'D MG 02' },
    { value: '986237', label: 'M SP 01' },
    { value: '941278', label: 'M SP 02' },
    { value: '897643', label: 'X TSS01' },
    { value: '423767', label: 'X TSS02' },
    { value: '423837', label: 'X FIS24' }
  ];

  constructor(private poNotification: PoNotificationService, private formBuilder: FormBuilder, private idEntService: AppServiceService) {}

  ngOnInit() {
    this.createForm();
    this.idEntService.IdEnt().subscribe( (ident) => { this.dadosIdEnt = ident; console.log(ident)});
  }

  createForm(){
    this.formNfeMonitor = this.formBuilder.group({
      filial: '',
      statusDoc: '',
      tipoNf: '',
      dataInicial: '',
      dataFinal: '',
      docInicial: '',
      docFinal: '',
      serie: '',
      ambiente: ''
    });
  }

  onSubmit(){
    const novaConsultaNfe = this.formNfeMonitor.getRawValue() as NfeMonitoramentoInterface;
    console.log(novaConsultaNfe);

    if (this.formNfeMonitor.valid) {
      this.poNotification.success('teste');
    }else{
      this.poNotification.error('teste');
    }

    // Usar o método reset para limpar os controles na tela
    this.formNfeMonitor.reset();
  }

}
