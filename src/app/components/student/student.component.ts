import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
createEmployee() {
throw new Error('Method not implemented.');
}
  student: Student[];
  message: String;

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    return this.service.getAllStudents().
      subscribe(
        data => {
          this.student = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteStudent(studentId: String) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneStudent(studentId).subscribe(data => {
        this.message = data;
        this.getAllStudents();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }

  editStudent(studentId:String) {
    this.router.navigate(['Edit', studentId]);
  }


}
