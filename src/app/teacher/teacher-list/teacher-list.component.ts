import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherService: TeacherService, private toastr: ToastrService, private router: Router
    ) { }


    private teachers = [];

    ngOnInit() {
      this.teacherService.getAll().subscribe((response: any) => {
        this.teachers = response;
    });
  }



  onDelete(teacherId) {
    if (confirm('Da li ste sigurni?')) {
      this.teacherService.deleteOne(teacherId).subscribe(result => {
        this.teacherService.getAll();
        this.toastr.success('Izbrisali ste profesora.');
   });
 }
}

onAdd() {
   this.router.navigate(['teacher/new']);
}

onEdit(teacherId) {
  this.router.navigate(['teacher', teacherId]);
}
}

