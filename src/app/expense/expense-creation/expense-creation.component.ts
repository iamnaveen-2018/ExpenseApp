import { Component,OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ExpenseService } from '../service/expense.service';
import { SelectModule } from 'primeng/select';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ExpenseAddDialogComponent } from '../expense-add-dialog/expense-add-dialog.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-expense-creation',
  imports: [
    SelectModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './expense-creation.component.html',
  styleUrl: './expense-creation.component.scss'
})
export class ExpenseCreationComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type','desc', 'source', 'amount'];
  dataSource = [];

  constructor(
    private dialog: MatDialog,
    private _expenseService: ExpenseService
  ){

  }

  ngOnInit(): void {
      this.loadData()
  }

  openpopUp(){
    let dialogRef = this.dialog.open(ExpenseAddDialogComponent, {
      data: {}
    })
    dialogRef.afterClosed().subscribe((result) => {
      if(result == 'submit'){
        // this.ngOnInit();
        alert("Submited")
      }
    })
  }

  loadData(){
    this._expenseService.GetAllExpense().subscribe((element) => {
      this.dataSource = element.data;
    })
  }
}
