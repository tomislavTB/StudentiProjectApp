import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss']
})
export class DivisionListComponent implements OnInit {

  constructor(private divisionService: DivisionService, private toastr: ToastrService, private router: Router
    ) { }

    private divisions = [];

    ngOnInit() {
      this.divisionService.getAll().subscribe((response: any) => {
        this.divisions = response;
    });
  }


  onDelete(divisionId) {
    if (confirm('Da li ste sigurni?')) {
      this.divisionService.deleteOne(divisionId).subscribe(result => {
        this.divisionService.getAll();
        this.toastr.success('Izbrisali ste smjer.');
   });
 }
}

onAdd() {
   this.router.navigate(['divisions/new']);
}

onEdit(divisionId) {
  this.router.navigate(['divisions', divisionId]);
}
}
