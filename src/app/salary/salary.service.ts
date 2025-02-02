import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(
    private http: HttpClient
  ) { }

  public GetAllSalary(){
    return this.http.get<any>('https://localhost:7227/api/Salary').pipe(tap((res) => {}))
  }

  public AddNewSalary(value: any){
    return this.http.post<any>('https://localhost:7227/api/Salary', value).pipe(tap((res) => {}))
  }

  public DeleteSalarybyId(Sid: any){
    return this.http.delete<any>('https://localhost:7227/api/Salary/' + Sid.toString()!).pipe(tap((res) => {}))
  }
}
