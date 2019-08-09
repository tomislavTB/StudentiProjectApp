import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityService } from '../city.service';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {


  constructor(private cityService: CityService, private toastr: ToastrService, private router: Router, private form: FormService
    ) { }

  private cities = [];

  ngOnInit() {
    this.cityService.getAll().subscribe((response: any) => {
      this.cities = response;
    });
  }

  onDelete(cityId) {
    if (confirm('Da li ste sigurni?')) {
      this.cityService.deleteOne(cityId).subscribe(result => {
        this.cityService.getAll();
        this.toastr.success('Izbrisali ste grad.');
   });
 }
}

onAdd() {
   this.router.navigate(['cities/new']);
}

onEdit(cityId) {
  this.form.show();
  this.router.navigate(['cities', cityId]);
}
}
