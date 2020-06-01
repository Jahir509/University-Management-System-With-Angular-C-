import { Injectable, Output, EventEmitter } from '@angular/core';
import { Student } from '../shared/student.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
const baseUrl:string = "http://localhost:13171/api/";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  s:Student;
  @Output() selectedStudent = new EventEmitter<Student>();

  constructor(private http:HttpClient) { }

  GetAll():Observable<Student[]>{
    var url = baseUrl+"Students";
    var students = this.http.get<Student[]>(url);
    //var students = this.http.get(url)
    //.map((res: Response) => res.json().response.map((student: Student) => new Student().deserialize(student)));
  
    return students;
  }

  Create(student:Student):Observable<Student>{
    var url = baseUrl+"Students";
    return this.http.post<Student>(url,student,httpOptions);

  }
  GetStudent(Id:number):Observable<Student>{
    var url = baseUrl+"Students/"+Id.toString();
    var student = this.http.get<Student>(url);
    return student;
  }
  Update(student:Student):Observable<void>{
    var url = baseUrl+"Students/"+student.Id.toString();
    return this.http.put<void>(url,student,httpOptions);
    //alert(student.Name)
  }

  DeleteStudent(student: Student) {
    var url = baseUrl+"Students/"+student.Id.toString();
    return this.http.delete(url);
  }
}
