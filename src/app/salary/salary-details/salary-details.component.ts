import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

//Service
import { SalaryService } from '../salary.service';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-salary-details',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    RouterModule,
    MatProgressBarModule
  ],
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.scss'
})
export class SalaryDetailsComponent implements OnInit {

  displayedColumns: string[] = ['source', 'type', 'about', 'amount', 'expense', 'savings', 'action'];
  dataSource = []
  public loading: boolean = false;
  constructor(
    private _salaryService: SalaryService
  ){}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.loading = true;
    this._salaryService.GetAllSalary().pipe(finalize(() => { this.loading = false;})).subscribe((ele) => {
      this.dataSource = ele.data;
    })
  }

  DeleteSalary(id: any){
    this._salaryService.DeleteSalarybyId(id).subscribe((ele) => {
      this.ngOnInit();
    });
  }

}
