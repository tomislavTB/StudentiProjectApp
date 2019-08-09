import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { ToastrService } from 'ngx-toastr';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router,
    private toastr: ToastrService,
    private form: FormService
  ) { }

  public city: any = {};
  public errorMessage = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cityId = params.id;
      if(cityId != null) {
        this.getCity(cityId);
      }
    });
  }

  getCity(cityId) {
      this.cityService.getOne(cityId).subscribe(response =>
        {
          this.city = response;
          this.city.id = cityId;
        }
      );
  }

  onSubmit() {
    this.form.show();

    this.cityService.submit(this.city).subscribe(
      (response: any) => {
        this.toastr.success('Bravo');
        this.router.navigate(['cities']);
        this.form.hide();
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }
}
