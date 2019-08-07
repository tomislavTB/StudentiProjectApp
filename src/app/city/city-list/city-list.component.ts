import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {


  constructor(private cityService: CityService, private toastr: ToastrService, private router: Router
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
   this.router.navigate(['city/new']);
}

onEdit(cityId) {
  this.router.navigate(['city', cityId]);
}
}
