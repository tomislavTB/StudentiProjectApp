import { Component, OnInit } from '@angular/core';
import { ExecutorService } from '../executor.service';

@Component({
  selector: 'app-executor-list',
  templateUrl: './executor-list.component.html',
  styleUrls: ['./executor-list.component.scss']
})
export class ExecutorListComponent implements OnInit {

  constructor(private executorService: ExecutorService
    ) { }

    private executors = [];

    ngOnInit() {
      this.executorService.getAll().subscribe((response: any) => {
        this.executors = response;
    });
  }

}

