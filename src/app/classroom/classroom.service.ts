import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../shared/classroom.model';
import { Student } from '../shared/student.model';

const baseUrl:string = "http://localhost:13171/api/";
const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {


  constructor(private http:HttpClient) { }
 
room = new EventEmitter<string>();
  
  GetAll():Observable<Classroom[]>{
    var url = baseUrl+"Classrooms";
    return this.http.get<Classroom[]>(url);
  }

  GetById(id:number):Observable<Classroom>{
    var url=baseUrl+"Classrooms/"+id.toString();
    var classroom =  this.http.get<Classroom>(url);
    return classroom;
  }

  Create(classroom:Classroom):Observable<Classroom>{
    var url=baseUrl+"Classrooms";
    return this.http.post<Classroom>(url,classroom,httpOptions);
  }

  Update(classroom:Classroom):Observable<void>{
    var url = baseUrl+"Classrooms/"+classroom.Id.toString();
    return this.http.put<void>(url,classroom,httpOptions);
  }

  Delete(classroom:Classroom){
    var url = baseUrl+"Classrooms/"+classroom.Id.toString();
    return this.http.delete(url);
  }
  
}
