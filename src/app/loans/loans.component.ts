import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
  data = [
    { amount: '$800,000', installments: 'Cuenta 24', issueDate: '24 Marzo, 2022', monthly: '$3,000', status: 'Pagar', selected: false },
    { amount: '$500,000', installments: 'Cuenta 24', issueDate: '24 Marzo, 2022', monthly: '$3,000', status: 'Cancelado', selected: false },
  ];
  toggleSelection(item: any) {
    item.selected = !item.selected;
  }

  selectAll(event: any) {
    const checked = event.target.checked;
    this.data.forEach(item => item.selected = checked);
  }
}
