import { Component, OnInit } from '@angular/core';
import { ExecutorService } from '../executor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executor-list',
  templateUrl: './executor-list.component.html',
  styleUrls: ['./executor-list.component.scss']
})
export class ExecutorListComponent implements OnInit {


  constructor(private executorService: ExecutorService, private toastr: ToastrService, private router: Router
    ) { }
    private executors = [];

    ngOnInit() {
      this.executorService.getAll().subscribe((response: any) => {
        this.executors = response;
    });
  }


  onDelete(executorId) {
    if (confirm('Da li ste sigurni?')) {
      this.executorService.deleteOne(executorId).subscribe(result => {
        this.executorService.getAll();
        this.toastr.success('Izbrisali ste izvršitelja.');
   });
 }
}

onAdd() {
   this.router.navigate(['executors/new']);
}

onEdit(executorId) {
  this.router.navigate(['executors', executorId]);
}
}

