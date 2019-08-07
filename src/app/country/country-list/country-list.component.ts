import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: CountryService, private toastr: ToastrService, private router: Router
    ) { }

    private countries = [];

    ngOnInit() {
      this.countryService.getAll().subscribe((response: any) => {
        this.countries = response;
    });
  }



  onDelete(countryId) {
    if (confirm('Da li ste sigurni?')) {
      this.countryService.deleteOne(countryId).subscribe(result => {
        this.countryService.getAll();
        this.toastr.success('Izbrisali ste državu.');
   });
 }
}

onAdd() {
   this.router.navigate(['country/new']);
}

onEdit(countryId) {
  this.router.navigate(['country', countryId]);
}
}

