import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent implements OnInit {

  constructor(private collegeService: CollegeService, private toastr: ToastrService, private router: Router
    ) { }

    private colleges = [];

    ngOnInit() {
      this.collegeService.getAll().subscribe((response: any) => {
        this.colleges = response;
    });
  }

  onDelete(collegeId) {
    if (confirm('Da li ste sigurni?')) {
      this.collegeService.deleteOne(collegeId).subscribe(result => {
        this.collegeService.getAll();
        this.toastr.success('Izbrisali ste fakultet.');
   });
 }
}

onAdd() {
   this.router.navigate(['college/new']);
}

onEdit(collegeId) {
  this.router.navigate(['college', collegeId]);
}
}

