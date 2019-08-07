import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  public student : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const studentId = params['id'];
      if(studentId != null) {
        this.getStudent(studentId);
      }
    });
  }

  getStudent(studentId) {
      this.studentService.getOne(studentId).subscribe(response =>
        {
          this.student = response;
          this.student.id = studentId;
        }
      );
  }

}
