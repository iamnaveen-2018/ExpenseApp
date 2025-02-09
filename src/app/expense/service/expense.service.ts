import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  GetAllExpense(){
    return this.http.get<any>('https://localhost:7227/api/Expense').pipe(tap((res)=>{}))
  }

  GetAllSalary(){
    return this.http.get<any>('https://localhost:7227/api/Salary').pipe(tap((res) => {}))
  }

  AddNewExpense(value: any){
    return this.http.post<any>('https://localhost:7227/api/Expense', value).pipe(tap((res) => {}))
  }
}
