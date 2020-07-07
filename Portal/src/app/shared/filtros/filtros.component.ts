import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem, PoButtonGroupToggle, PoNotificationService, PoSelectOption, PoRadioGroupOption, PoMultiselectOption } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  todasFiliais: Array<string> = [];
  nameFiliais: string;

  readonly statusDoc: Array<PoSelectOption> = [
    { label: 'Não transmitida', value: 'Não transmitida' },
    { label: 'Autorizada', value: 'Autorizada' },
    { label: 'Transmitida', value: 'Transmitida' },
    { label: 'Cancelada', value: 'Cancelada' },
    { label: 'Rejeitada', value: 'Rejeitada' },
    { label: 'Inutilizada', value: 'Inutilizada' },
    { label: 'Uso denegado', value: 'Uso denegado' }
  ];

  readonly tipoDoc: Array<PoSelectOption> = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Entrada', value: 'Entrada' },
    { label: 'Saída', value: 'Saída' }
  ];

  readonly ambiente: Array<PoSelectOption> = [
    { label: '', value: '' },
    { label: 'Homologação', value: 'Homologação' },
    { label: 'Produção', value: 'Produção' }
  ];

  public readonly filiais: Array<PoMultiselectOption> = [
    { value: '412341', label: 'D MG 01' },
    { value: '518734', label: 'D MG 02' },
    { value: '986237', label: 'M SP 01' },
    { value: '941278', label: 'M SP 02' },
    { value: '897643', label: 'X TSS01' },
    { value: '423767', label: 'X TSS02' },
    { value: '423837', label: 'X FIS24' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    if (f.valid) {
      this.poNotification.success('teste');
    }else{
      this.poNotification.error('teste');
    }
  }

}
