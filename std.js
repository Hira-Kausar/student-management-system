"use strict";
//This project is a simple console based Student Management System. In this project you will be learning 
//how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students 
//in the given courses. Also, you will be implementing the following operations enroll, view balance, pay 
//tuition fees, show status, etc. The status will show all the details of the student including name, id, 
//courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
Object.defineProperty(exports, "__esModule", { value: true });
class school {
    addstudent(stdobj) {
        this.students.push(stdobj);
    }
    addteacher(techobj) {
        this.teachers.push(techobj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class student {
    constructor(name, age, schoolname) {
        this.name = name;
        this.age = age;
        this.schoolname = schoolname;
    }
}
class teacher extends student {
}
let school1 = new school("mama");
let school2 = new school("smart");
let s1 = new student("hira", 30, school1.name);
let s2 = new student("kausar", 200, school2.name);
let s3 = new student("aqsa", 24, school2.name);
let t1 = new teacher("hania", 24, school1.name);
let t2 = new teacher("amir", 24, school2.name);
let t3 = new teacher("amin", 24, school2.name);
school1.addstudent(s1);
school2.addstudent(s2);
school2.addstudent(s3);
school1.addteacher(t1);
school2.addteacher(t2);
school2.addteacher(t3);
//console.log(t1);
//console.log(t2);
//console.log(t3);
console.log(school1);
console.log(school2);
