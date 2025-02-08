import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ExpenseDetailsComponent } from "../expense-details/expense-details.component";
import { SavingsDetailsComponent } from "../../savings/savings-details/savings-details.component";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


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
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
    MatTabsModule,
    ExpenseDetailsComponent,
    SavingsDetailsComponent,
    MatCardModule,
    MatTableModule,
    MatIconModule
],
  templateUrl: './expense-creation.component.html',
  styleUrl: './expense-creation.component.scss'
})
export class ExpenseCreationComponent {
  displayedColumns: string[] = ['name', 'type','desc', 'source', 'amount'];
  dataSource = [];

  openpopUp(){
    console.log("dialoug box");
  }
}
