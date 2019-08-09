import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {

  constructor(private gradeService: GradeService, private toastr: ToastrService, private router: Router
    ) { }

    private grades = [];

    ngOnInit() {
      this.gradeService.getAll().subscribe((response: any) => {
        this.grades = response;
    });
  }
  onDelete(gradeId) {
    if (confirm('Da li ste sigurni?')) {
      this.gradeService.deleteOne(gradeId).subscribe(result => {
        this.gradeService.getAll();
        this.toastr.success('Izbrisali ste ocjenu.');
   });
 }
}

onAdd() {
   this.router.navigate(['grades/new']);
}

onEdit(gradeId) {
  this.router.navigate(['grades', gradeId]);
}
}

