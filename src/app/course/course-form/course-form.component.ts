import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  public course : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const courseId = params['id'];
      if(courseId != null) {
        this.getCourse(courseId);
      }
    });
  }

  getCourse(courseId) {
      this.courseService.getOne(courseId).subscribe(response =>
        {
          this.course = response;
          this.course.id = courseId;
        }
      );
  }

}
