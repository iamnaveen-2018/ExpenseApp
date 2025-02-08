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
}
