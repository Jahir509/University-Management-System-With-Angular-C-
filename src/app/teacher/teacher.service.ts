import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Teacher } from '../shared/teacher.model';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


const baseUrl="http://localhost:13171/api/";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient,private router:Router) { }

  GetAll():Observable<Teacher[]>{
    var url=baseUrl+"Teachers";
    var teachers = this.http.get<Teacher[]>(url);
    return teachers;
  }

  Create(teacher:Teacher):Observable<Teacher>{
    var url = baseUrl+"Teachers";
    return this.http.post<Teacher>(url,teacher,httpOptions);
  }

  Update(teacher:Teacher):Observable<void>{
    var url = baseUrl+"Teachers/"+teacher.Id.toString();
    return this.http.put<void>(url,teacher,httpOptions);
  }

  Delete(teacher:Teacher){
    var url = baseUrl+"Teachers/"+teacher.Id.toString();
    return this.http.delete(url);
  }


    //reloading page:
    redirectTo(url:string){
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
      this.router.navigate([url]));
    }
}
