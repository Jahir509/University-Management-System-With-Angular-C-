import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../shared/department.model';


const baseUrl:string = "http://localhost:13171/api/";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  GetAll():Observable<Department[]>{
    var url = baseUrl+"Departments"
    var departments = this.http.get<Department[]>(url);
    return departments;
  }
}
