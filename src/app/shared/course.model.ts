import { Department } from './department.model';

export class Course{
    Id:number;
    Code:string;
    Credit:number;
    Description:string;
    DepartmentId:number;
    Semester:number;
    Department:Department;
}