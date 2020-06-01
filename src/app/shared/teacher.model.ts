import { Department } from './department.model';

export class Teacher{
    Id:number;
    Name:string;
    Address:string;
    Email:string;
    Phone:string;
    Designation:string
    DepartmentId:number;
    CreditTaken:number;
    CreditRemain:number;
    Department:Department;
}