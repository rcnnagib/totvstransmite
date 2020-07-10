import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

export interface NfeMonitoramentoInterface {
  filial: Array<PoMultiselectOption>;
  statusDoc: Array<PoSelectOption>;
  tipoNf: string;
  dataInicial: Date;
  dataFinal: Date;
  docInicial: string;
  docFinal: string;
  serie: string;
  ambiente: string;
}
