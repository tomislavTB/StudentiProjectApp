import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExecutorService } from '../executor.service';

@Component({
  selector: 'app-executor-form',
  templateUrl: './executor-form.component.html',
  styleUrls: ['./executor-form.component.scss']
})
export class ExecutorFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private executorService: ExecutorService
  ) { }

  public executor : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const executorId = params['id'];
      if(executorId != null) {
        this.getExecutor(executorId);
      }
    });
  }

  getExecutor(executorId) {
      this.executorService.getOne(executorId).subscribe(response =>
        {
          this.executor = response;
          this.executor.id = executorId;
        }
      );
  }

}
