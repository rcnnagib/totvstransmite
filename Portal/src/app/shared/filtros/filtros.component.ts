import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { PoNotificationService, PoSelectOption, PoMultiselectOption } from '@po-ui/ng-components';
import { NfeMonitoramentoInterface } from '../nfe/nfe-monitoramento-interface';
import { AppServiceService } from 'src/app/app-service.service';
import { IdEnt } from './../../features/documentos/nfe/id-ent';
import { StatusDoc } from './enumStatusDocNFe';
import { AmbienteNfe } from './enumAmbienteNFe';
import { TipoDocNFe } from './enumTipoDocNFe';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  formNfeMonitor: FormGroup;
  dadosIdEnt: Array<IdEnt>;

  readonly statusDoc: Array<PoSelectOption> = [
    { label: 'Todos', value: StatusDoc.Todos },
    { label: 'Não transmitida', value: StatusDoc.NaoTransmitida },
    { label: 'Autorizada', value: StatusDoc.Autorizada },
    { label: 'Transmitida', value: StatusDoc.Transmitida },
    { label: 'Cancelada', value: StatusDoc.Cancelada },
    { label: 'Rejeitada', value: StatusDoc.Rejeitada },
    { label: 'Inutilizada', value: StatusDoc.Inutilizada },
    { label: 'Denegada', value: StatusDoc.Denegada }
  ];

  readonly tipoDoc: Array<PoSelectOption> = [
    { label: 'Ambos', value: TipoDocNFe.Ambos },
    { label: 'Entrada', value: TipoDocNFe.Entrada },
    { label: 'Saída', value: TipoDocNFe.Saida }
  ];

  readonly ambiente: Array<PoSelectOption> = [
    { label: 'Todos', value: AmbienteNfe.Ambos },
    { label: 'Produção', value: AmbienteNfe.Producao },
    { label: 'Homologação', value: AmbienteNfe.Homologacao }
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
    this.idEntService.IdEnt().subscribe( (ident) => { this.dadosIdEnt = ident; console.log(ident); });
  }

  // Cria o formulário
  createForm(): void{

    this.formNfeMonitor = this.formBuilder.group({
      filial:       [[], Validators.required],
      statusDoc:    [[]],
      tipoDoc:      [TipoDocNFe.Ambos],
      dataInicial:  [new Date()],
      dataFinal:    [new Date()],
      docInicial:   ['', Validators.maxLength(9)],
      docFinal:     ['', Validators.maxLength(9)],
      serie:        ['', Validators.maxLength(3)],
      ambiente:     [AmbienteNfe.Ambos]
    });

  }

  // Envio da requisição do formulário
  onSubmit(): void {
    const novaConsultaNfe = this.formNfeMonitor.getRawValue() as NfeMonitoramentoInterface;
    console.log(novaConsultaNfe);

    // if (this.formNfeMonitor.valid) {
    //   this.poNotification.success('teste');
    // }else{
    //   this.poNotification.error('teste');
    // }
  }

  // Limpa formulário
  clearForm(): void{

    this.formNfeMonitor.reset();
    this.formNfeMonitor.get('filial').setValue([]);
    this.formNfeMonitor.get('statusDoc').setValue([]);
    this.formNfeMonitor.get('tipoDoc').setValue(TipoDocNFe.Ambos);
    this.formNfeMonitor.get('dataInicial').setValue(new Date());
    this.formNfeMonitor.get('dataFinal').setValue(new Date());
    this.formNfeMonitor.get('docInicial').setValue('');
    this.formNfeMonitor.get('docFinal').setValue('');
    this.formNfeMonitor.get('serie').setValue('');
    this.formNfeMonitor.get('ambiente').setValue(AmbienteNfe.Ambos);

  }

}
