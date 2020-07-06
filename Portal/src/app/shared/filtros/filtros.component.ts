import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem, PoButtonGroupToggle, PoNotificationService, PoSelectOption, PoRadioGroupOption } from '@po-ui/ng-components';

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

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'po-icon-news', value: 'po-icon-news' },
    { label: 'po-icon-calendar', value: 'po-icon-calendar' },
    { label: 'po-icon-user', value: 'po-icon-user' },
    { label: 'po-icon-telephone', value: 'po-icon-telephone' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
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

  restore() {
    this.button = {};
    this.buttons = [];
  }

}
