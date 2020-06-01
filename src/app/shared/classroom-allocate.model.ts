import { Course } from './course.model';


export class AllocateClassroom{
    Id:number;
    DepartmentId:number;
    CourseId:number;
    RoomNo:Date;
    StartTime:string;
    EndTime:string;
    Course:Course;
}