import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.sass']
})
export class PatientPortalComponent implements OnInit {
  data: any;
  patient: any;
  constructor(private http: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getPatient(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
        return this.data = data;
    });
  }
  getPatient(id) {
    return this.http.get(`http://10.186.81.123.:8080/patientPortal/${id}`);
  }
}
