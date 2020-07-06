import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem, PoButtonGroupToggle, PoNotificationService, PoSelectOption, PoRadioGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  button: any;
  buttons: Array<PoButtonGroupItem>;
  small: boolean;
  toggle: PoButtonGroupToggle;
  todasFiliais: Array<string> = [];
  nameFiliais: string;


  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  readonly statusDoc: Array<PoSelectOption> = [
    { label: '', value: '' },
    { label: 'Recebido', value: 'Recebido' },
    { label: 'Assinado', value: 'Assinado' },
    { label: 'Inválido', value: 'Inválido' },
    { label: 'Aguardando retorno', value: 'Pendente' },
    { label: 'Rejeitado', value: 'Rejeitado' },
    { label: 'Autorizado', value: 'Autorizado' },
    { label: 'Cancelado', value: 'Cancelado' }
  ];

  readonly tipoNf: Array<PoSelectOption> = [
    { label: '', value: '' },
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
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  updateCampoFiliais() {
    this.nameFiliais = this.filiais
      .filter((employee: PoMultiselectOption) => this.todasFiliais.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }

  restore() {
    this.button = {};
    this.buttons = [];
  }

}
