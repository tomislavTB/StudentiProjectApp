import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService: CourseService, private toastr: ToastrService, private router: Router
    ) { }

    private courses = [];

    ngOnInit() {
      this.courseService.getAll().subscribe((response: any) => {
        this.courses = response;
    });
  }

  onDelete(courseId) {
    if (confirm('Da li ste sigurni?')) {
      this.courseService.deleteOne(courseId).subscribe(result => {
        this.courseService.getAll();
        this.toastr.success('Izbrisali ste kolegij.');
   });
 }
}

onAdd() {
   this.router.navigate(['courses/new']);
}

onEdit(courseId) {
  this.router.navigate(['courses', courseId]);
}
}
