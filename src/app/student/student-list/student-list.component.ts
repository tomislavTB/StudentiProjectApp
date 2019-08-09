import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private toastr: ToastrService, private router: Router
    ) { }

    private students = [];

    ngOnInit() {
      this.studentService.getAll().subscribe((response: any) => {
        this.students = response;
    });
  }


    onDelete(studentId) {
      if (confirm('Da li ste sigurni?')) {
        this.studentService.deleteOne(studentId).subscribe(result => {
          this.studentService.getAll();
          this.toastr.success('Izbrisali ste studenta.');
     });
   }
 }

  onAdd() {
     this.router.navigate(['studnets/new']);
 }

  onEdit(studentId) {
    this.router.navigate(['students', studentId]);
 }
}
