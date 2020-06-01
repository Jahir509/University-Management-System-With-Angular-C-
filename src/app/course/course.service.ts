import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../shared/course.model';
import { Router } from '@angular/router';


const baseUrl:string = "http://localhost:13171/api/";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient,private router:Router) { }

  GetAll():Observable<Course[]>{
    var url = baseUrl+"Courses";
    var courses = this.http.get<Course[]>(url);
    return courses;
  }

  Create(course:Course):Observable<Course>{
    var url = baseUrl+"Courses";
    return this.http.post<Course>(url,course,httpOptions);
  }

  Update(course:Course):Observable<void>{
    var url=baseUrl+"Courses/"+course.Id.toString();
    return this.http.put<void>(url,course,httpOptions);
  }

  Delete(course:Course){
    var url=baseUrl+"Courses/"+course.Id.toString();
    return this.http.delete(url);
  }


      //reloading page:
      redirectTo(url:string){
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
        this.router.navigate([url]));
      }


}
