import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private teacherService: StudentService
  ) { }

  public teacher : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const teacherId = params['id'];
      if(teacherId != null) {
        this.getTeacher(teacherId);
      }
    });
  }

  getTeacher(teacherId) {
      this.teacherService.getOne(teacherId).subscribe(response =>
        {
          this.teacher = response;
          this.teacher.id = teacherId;
        }
      );
  }

}
